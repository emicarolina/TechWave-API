import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Rotas públicas (qualquer um pode acessar)
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

// Rotas protegidas (apenas ADMIN pode acessar)
router.post("/products", protect, isAdmin, createProduct);
router.put("/products/:id", protect, isAdmin, updateProduct);
router.delete("/products/:id", protect, isAdmin, deleteProduct);

export default router;
