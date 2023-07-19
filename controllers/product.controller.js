import Product from "../models/Product.js";
import { getProductByIdValidator } from "../validators/products.validator.js";
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({ status: true, data: products });
  } catch (error) {
    return res.status(400).json({ message: "ERROR_OCCURED" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { productId } = getProductByIdValidator(req.params);
    const product = await Product.findById(productId);
    return res
      .status(product ? 200 : 404)
      .json({ status: product ? true : false, product });
  } catch (error) {
    return res.status(400).json({ message: "ERROR_OCCURED" });
  }
};

export const createNewProduct = async (req, res) => {
  try {
    const newProduct = new Product({ ...req.body });
    await newProduct.save();
    return res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "ERROR_OCCURED" });
  }
};

export const updateProductById = async (req, res) => {
  try {
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const deleteProductById = async (req, res) => {
  try {
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
