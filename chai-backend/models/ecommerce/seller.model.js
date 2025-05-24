import mongoose from "mongoose";

import { paymentInfoSchema } from "./payment.model";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: true,
    },
    officeAddress: {
      type: String,
      requried: true,
    },
    sellerProductItems: {
      type: [productSchema],
    },
    sellerBankDetails: {
      type: paymentInfoSchema,
    },
  },
  { timestamps: true }
);

export const Seller = mongoose.model("Seller", sellerSchema);
