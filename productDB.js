require("dotenv").config()
const connectDB = require("./db/connect");
const Product = require("./models/product");

const ProductJson = require("./products.json")

const start = () => {
    try {
        connectDB(process.env.MONGODB_URL);
         Product.deleteMany();
        Product.create(ProductJson);
        console.log("success");
    }catch(error){
        console.log(error);
    }
}

start();