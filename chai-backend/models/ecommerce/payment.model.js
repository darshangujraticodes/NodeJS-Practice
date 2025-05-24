import mongoose from "mongoose";

export const paymentInfoSchema = new mongoose.Schema({
  upi: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  bankAccountNum: {
    type: Number,
    required: true,
  },
  bankIfscCode: {
    type: Number,
    required: true,
  },
});
