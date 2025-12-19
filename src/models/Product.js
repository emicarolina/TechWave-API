import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "O nome do produto é obrigatório"],
      trim: true,
      maxlength: [100, "O nome não pode ter mais de 100 caracteres"],
    },
    description: {
      type: String,
      required: [true, "A descrição é obrigatória"],
      trim: true,
      maxlength: [500, "A descrição não pode ter mais de 500 caracteres"],
    },
    price: {
      type: Number,
      required: [true, "O preço é obrigatório"],
      min: [0, "O preço não pode ser negativo"],
    },
    category: {
      type: String,
      required: [true, "A categoria é obrigatória"],
      trim: true,
    },
    stock: {
      type: Number,
      required: [true, "O estoque é obrigatório"],
      min: [0, "O estoque não pode ser negativo"],
      default: 0,
    },
    imageUrl: {
      type: String,
      required: [true, "A URL da imagem é obrigatória"],
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
