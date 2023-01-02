const mongoose = require("mongoose");

// uri = "mongodb+srv://KishanDb:kishan1995@kishanapi.0oyaxpy.mongodb.net/KishanApi?retryWrites=true&w=majority"


const connectDB = (uri) => {

    console.log("connected")

    return mongoose.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;