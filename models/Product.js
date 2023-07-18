import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    codeSAC_HSN: {
        type: String,
        required: true,
    },
    unitOfMeasure: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stockValue: {
        type: Number,
        required: true,
    },
    productUrl: {
        type: String,
        required: true,
    },
})

const ProductModel = new mongoose.model("Product", ProductSchema);
module.exports = ProductModel;

