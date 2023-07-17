import ProductModel from "../models/Product";

const mongoose = require("mongoose");

export const getProductName = async (req, res) => {
    try {
        const productName = await ProductModel.find();
        res.status(200).json(productName);
    } catch (error) {
        console.log(error);
    }
}

