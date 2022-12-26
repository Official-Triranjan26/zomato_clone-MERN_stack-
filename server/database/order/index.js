import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    orderDetails: [
      {
        food: [
          {
            details: { type: mongoose.Types.ObjectId, required: true },
            quantity: { type: Number, required: true },
          },
        ],
        paymentMode: { type: String, required: true },
        status: { type: String, default: "Placed" },
        paymentDetails: {
          itemTotal: { type: Number, required: true },
          promo: { type: Number, required: true },
          tax: { type: Number, required: true },
          razorpay_payment_id: { type: String, required: true },
        },
      },
    ],
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model("orders", OrderSchema);
