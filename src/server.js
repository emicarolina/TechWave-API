import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./config/database.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

connectDatabase();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "🚀 API de Produtos funcionando!" });
});

app.use("/api", productRoutes);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando na porta ${PORT}`);
  });
}

export default app;
