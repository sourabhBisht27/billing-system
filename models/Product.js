import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    codeSACOrHSN: {
      type: String,
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", ProductSchema);

export default Product;
