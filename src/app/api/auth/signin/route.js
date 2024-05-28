import { generateAccessToken ,
    generateRefreshToken,
    validationEmail,
    validationPassword,
    verifyPassword,
 } from "@/utils/auth";
import UserModel from '@/models/User';
import connectToDB from "@/config/db";

export async function POST (req){
    try{
        connectToDB();
        const body = await req.json();
        const {email , password} = body;

        // const isValidEmail = validationEmail(email);
        // const isValidPassword = validationPassword(password);

        // if(!isValidEmail || !isValidPassword){
        //     return Response.json(
        //         {message : "Email or Password is Not Valid"},
        //         {status: 419},
        //     );
        // }

        const user = await UserModel.findOne({email});

        if(!user){
            return Response.json(
                {message : "User Is Not Found"},
                {status: 422},
            );
        }

        const isCorrectPasswordWithHash = verifyPassword(password , user.password);

        if(!isCorrectPasswordWithHash){
            return Response.json(
                {message : "Email or Password is Not Correct"},
                {status: 401},
            )
        }

        const accessToken = generateAccessToken({email});
        const refreshToken = generateRefreshToken({email});

        await UserModel.findOneAndUpdate(
            {email},
            {
                $set:{
                    refreshToken,
                }
            }
        );

        return Response.json(
            {message : "User Logged In Successfully"},
            {
                status: 200,
                headers:{
                    "Set-Cookie" : `token=${accessToken};path='/;httpOnly=trued`,
                }
            }
        )
    }catch(err){
        console.log("Error Request signin Server ->" , err)
        return Response.json(
            {message : err},
            {status:500}
        )
    }
}