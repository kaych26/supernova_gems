const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    jType: { type: String, required: true },
    jCollection: { type: String, required: true },
    featured: {type: Boolean, default: false}
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", Product);
