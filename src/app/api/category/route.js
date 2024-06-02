import connectToDB from "@/config/db";
import CategoriesModel from '@/models/Categories';

export async function POST (req){
    try{
        connectToDB();
        const body = await req.json();
        const {name , title , category , productID} = body;

        const categories = await CategoriesModel.create({
            name,
            title, 
            category,
            productID,
        })

        return Response.json(
            {message:"Created Successfully Categories ;))" , date:categories},
            {status:201},
        )
    }catch(err){
        return Response.json(
            {message:"Categories Message is Server Error =>" , err},
            {status:500},
        )
    }
}