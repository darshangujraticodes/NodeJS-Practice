import mongoose, { Types } from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      Type: Number,
      default: 0,
      required: true,
    },
    orderByCustomerId: {
      Type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    orderType: {
      type: String,
      enum: ["PREPAID", "CASH ON DELIVERY"],
      default: "CASH ON DELIVERY",
    },
    orderStatus: {
      type: String,
      enum: ["PENDING", "IN PROCESS", "DELIVERED", "CANCELLED"],
      default: "PENDING",
    },
    orderAddress: {
      type: String,
      required: true,
    },
    orderItems: {
      type: [orderItemSchema],
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
