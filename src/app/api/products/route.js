import connectToDB from "@/config/db";
import ProductModel from '@/models/Products';

export async function POST (req){
    try{
        connectToDB();
        const body = await req.json();
        const {
            name,
            price,
            category,
        } =body ;

        const product = await ProductModel.create({
            name,
            price,
            category,
        })

        return Response.json(
            {message : "Product Created Successfully :))", data:product },
            {status:201},
        )
    }catch(err){
        return Response.json(
            {message:"Product Message Server Error -> ",err},
            {status:500},
        )
    }
}