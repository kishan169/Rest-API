const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"proce must be provided"]
    },
    feature:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.25,
    },
    createdAt:{
        type:Date,
        default:Date.now()  
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi","google"],
            message:`{VALUE} is not supported`,
        }
    }
})

module.exports = mongoose.model("Product",productSchema);