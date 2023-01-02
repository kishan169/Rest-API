const Product = require("../models/product");

const getAllProducts = async (req,res) => {
    const Products = await Product.find(req.query)
    res.status(200).json({Products})
}

const getAllProductsTesting = async (req,res) => {
    const {company,name,feature,sort,select,pages} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
    }

    if(feature){
        queryObject.feature = feature;
    }

    if(name){
        queryObject.name = {$regex:name,$options: "i"};
    }

   let apiData = Product.find(queryObject);


    if(sort){
        let sortfix = sort.replace(","," ");
        apiData = apiData.sort(sortfix);
        queryObject.sort = sortfix;
    }

    if(select){
        let selectfix = select.split(",").join(" ");
        apiData = apiData.select(selectfix);
    }

    if(pages){
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 3;
    
        let skip = (page-1) * limit;
    
        apiData = apiData.skip(skip).limit(limit);
    }

    console.log(queryObject);

    const Products = await apiData;
    res.status(200).json({Products,numberofProducts:Products.length})
}

module.exports = {getAllProducts,getAllProductsTesting};