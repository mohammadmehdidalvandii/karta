const mongoose = require('mongoose');

const connectToDB = async ()=>{
    try{
        if(mongoose.connections[0].readyState){
            return true;
        }else{
            await mongoose.connect("mongodb://localhost:27017/karta")
            console.log("Connect To DB Successfully ;))")
        }
    }catch(err){
        console.log("DB connection has Error ->", err)
    }
}

export default connectToDB;