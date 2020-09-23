const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema(
  {
    tableNumber: {
      type: Number,
      required: true,
    },
    people: {
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

module.exports = mongoose.model("reverse-table", TableSchema);
