import { RequestHandler } from "express";
import { OrderModel, ProductModel } from "../models";
import mongoose from "mongoose";

type orderedProductsType = {
  productId: {
    type: mongoose.Schema.Types.ObjectId;
    required: true;
  };
  name: string;
  price: number;
  discount: number;
  quantity: number;
  thumbnailUrl: string;
};

// CREATE ORDER
export const createOrder: RequestHandler = async (req, res) => {
  const { userId, deliveryDetails, orderedProducts, deliveryStatus } = req.body;

  try {
    // CHECK PRODUCT AND STOCK
    for (let i = 0; i < orderedProducts.length; i++) {
      const { productId, quantity, name } = orderedProducts[i];
      const thisProduct = await ProductModel.findOne({ _id: productId });

      if (!thisProduct) {
        return res.status(401).json({
          message: ` could not find this product -> "${name}" from data base`,
        });
      }

      if (
        thisProduct.qty < quantity ||
        quantity <= 0 ||
        thisProduct.qty === 0
      ) {
        return res.status(401).json({
          message: ` "${name}" no more stock`,
        });
      }
    }

    // DECREASE STOCK bulk write yaj bichih???
    for (let i = 0; i < orderedProducts.length; i++) {
      const { productId, quantity } = orderedProducts[i];
      await ProductModel.updateOne(
        { _id: productId },
        {
          $inc: { qty: -quantity },
        }
      );
    }

    // CREATE ORDER

    // await OrderModel.bulkWrite(
    //   orderedProducts.map((item:orderedProductsType) => ({
    //     updateOne: {
    //       filter: { _id: item.productId },
    //       update: { quantity:  },
    //     },
    //   }))
    // );

    return res.json({ message: "Successfully order added" });
  } catch (error) {
    res.json(error);
  }
};
