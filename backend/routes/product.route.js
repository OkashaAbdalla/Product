import express from "express";
import {
  createProduct,
  getAllproducts,
  getProductById,
  updateProductById,
  deleteProduct  // ← Add this
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.get("/", getAllproducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProductById);
productRouter.delete("/:id", deleteProduct); // ← Add this

export default productRouter;
