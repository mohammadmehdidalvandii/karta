"use server"
import { hash , compare } from "bcryptjs";
import { sign , verify } from "jsonwebtoken";


const hashPassword = async (password) => {
    const hashedPassword = await hash(password , 12);
    return hashedPassword;
};

const verifyPassword = async (password , hashedPassword)=>{
    const isValid  = await compare(password , hashedPassword);
    return isValid;
}

const generateAccessToken = (data) => {
    const token = sign({...data} , process.env.ACCESS_TOKEN_SCT,{
        expiresIn : "60d",
    });
    return token;
}

const verifyAccessToken = (token) => {
    try{
        const tokenPayload  = verify(token , process.env.ACCESS_TOKEN_SCT);
        return tokenPayload;
    } catch(err){
        console.log("Verify Access Token Error ->", err);
        return false;
    };
}

const generateRefreshToken = (data) => {
    const token = sign({...data}, process.env.REFRESH_TOKEN_SCT,{
        expiresIn: "15d",
    });
    return token;
};

const validationEmail  = (email) => {
    const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
    return pattern.test(email);
}

const validationPhone = (phone) => {
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
    return pattern.test(phone);
};

const validationPassword  = (password) => {
    const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
    return pattern.test(password);
}



export {
hashPassword,
verifyPassword,
generateAccessToken,
verifyAccessToken,
generateRefreshToken,
validationEmail,
validationPhone,
validationPassword,
}