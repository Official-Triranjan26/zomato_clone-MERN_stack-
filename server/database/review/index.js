import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    food: { type: mongoose.Types.ObjectId, ref: "food" },
    restaurant: { type: mongoose.Types.ObjectId, ref: "restaurant" },
    user: { type: mongoose.Types.ObjectId, ref: "user" },
    rating: { type: Number, required: true },
    reviewText: { type: String, required: true },
    isRestaurentReview: Boolean,
    isFoodReview: Boolean,
    photos: { type: mongoose.Types.ObjectId, ref: "images" },
  },
  {
    timestamps: true,
  }
);

export const ReviewModal = mongoose.model("reviews", ReviewSchema);
