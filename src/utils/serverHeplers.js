import connectToDB from "@/config/db";
import { cookies } from "next/headers";
import { verifyAccessToken } from "./auth";
import UserModel from '@/models/User';

const authUser = async () => {
    connectToDB();
    const token =  cookies().get("token");
    let user = null ; 
    if(token) {
        const tokenPayload = verifyAccessToken(token.value);
        if(tokenPayload){
            user = await UserModel.findOne({email:tokenPayload.email})
        }
    }
    return user ; 
};

export {authUser}