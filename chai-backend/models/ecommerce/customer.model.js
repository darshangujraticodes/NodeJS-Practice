import mongoose from "mongoose";

import { paymentInfoSchema } from "./payment.model";

const customerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHERS", "NOT DEFINED"],
      default: "NOT DEFINED",
    },
    customerBankDetails: {
      type: paymentInfoSchema,
    },
  },
  { timestamps: true }
);

export const Customer = mongoose.model("Customer", customerSchema);
