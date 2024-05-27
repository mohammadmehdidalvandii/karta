import connectToDB from "@/config/db";
import UserModel from '@/models/User';
import { generateAccessToken , hashPassword } from "@/utils/auth";
import { roles } from "@/utils/constants";

export async function POST(req){
    connectToDB();
    const body =await req.json();

    const {name ,  email , phone , password} = body;
    
    // validation 

    const isUserExist = await UserModel.findOne({
        $or : [{name} , {email} , {phone}]
    });

    if(isUserExist){
        return Response.json({message: "The username or Email or Phone Exist Already !!"},{status: 422});
    }
 
    const hashedPassword = await hashPassword(password);
    const accessToken = generateAccessToken({name});

    const users = await UserModel.find({});

    await UserModel.create({
        name,
        email,
        phone,
        password: hashedPassword,
        role: users.length > 0 ? roles.USER : roles.ADMIN,
    });
    return Response.json(
        {message : "User Signed Up Successfully"},
        {status: 201,
            headers:{"Set-Cookie": `token=${accessToken};path=/;httpOnly=true`},
        }
    )
}