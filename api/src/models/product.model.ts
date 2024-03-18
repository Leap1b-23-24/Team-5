import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  categoryId: {
    // objectId mongo db
    // userId: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  // thumbnails: {
  //   type: String,
  //   required: true,
  // },

  // images: [
  //   {
  //     type: String,
  //     required: true,
  //   },
  // ],
  // coupon: {
  //   type: String,
  //   required: true,
  // },
  // salePercent: {
  //   type: Number,
  //   required: true,
  // },
  // description: {
  //   type: String,
  //   required: true,
  // },
  viewsCount: {
    type: Number,
    required: false,
  },
  createdAt: Date,
  updatedAt: Date,
});

export const ProductModel = model("product", productSchema);