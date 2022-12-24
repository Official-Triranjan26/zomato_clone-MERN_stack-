import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    orderDetails: [
      {
        food: [
          {
            details: { type: mongoose.Types.ObjectId, required: true },
            quantity: { type: number, required: true },
          },
        ],
        paymentMode: { type: String, required: true },
        status: { type: String, default: "Placed" },
        paymentDetails: {
          itemTotal: { type: number, required: true },
          promo: { type: number, required: true },
          tax: { type: number, required: true },
          razorpay_payment_id: { type: String, required: true },
        },
      },
    ],
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model("orders", OrderSchema);
