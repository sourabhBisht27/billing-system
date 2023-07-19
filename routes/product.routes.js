import { Router } from "express";
import {
  createNewProduct,
  getAllProducts,
  getProductById,
} from "../controllers/product.controller.js";
const router = Router();

router.get("/", getAllProducts);
router.get("/:productId", getProductById);
router.post("/", createNewProduct);
export default router;
