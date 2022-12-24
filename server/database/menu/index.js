import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema(
  {
    menus: [
      {
        name: { type: String, required: true },
        items: [
          {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "foods",
          },
        ],
      },
    ],
    recomended: [
      {
        type: mongoose.Types.ObjectId,
        ref: "foods",
        unique: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const MenuModel = mongoose.model("menus", MenuSchema);
