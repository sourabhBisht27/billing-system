import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    productName: string,
    category: string,
    codeSAC_HSN: string,
    unitOfMeasure: string,
    price: Number,
    stalkValue: Number,
    productUrl: string,
})

const Product = new mongoose.model("Product", ProductSchema);
module.exports = Product;

// methods: GET POST PATCH DELETE