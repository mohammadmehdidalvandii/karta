const mongoose = require('mongoose');
require('./Categories');


const schema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    price:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required: true,
    },
    categoriesID:  {
        type:mongoose.Types.ObjectId,
        ref:"Categories",
    }, 
});

const model = mongoose.models.Products || mongoose.model("Products", schema);
export default model