const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
   title: {
    type:String,
    required:true,
    },
    price:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required: true,
    }
});

const model = mongoose.models.Products || mongoose.model("Products", schema);
export default model