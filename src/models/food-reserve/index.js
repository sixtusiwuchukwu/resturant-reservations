const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
      required: true,
    },
    qauntity: {
      type: Number,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mogoose.model("reserve-food", FoodSchema);
