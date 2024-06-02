const mongoose = require('mongoose');
require('./Products');


const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    productID:{
        type:mongoose.Types.ObjectId,
        ref:"Products"
    },

})

const model = mongoose.models.Categories || mongoose.model("Categories" , schema);

export default model;