const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  CustomerName: String,
  CustomerEmail: String,
  CustomerMoNo: Number,
  CustomerPassword: String,
  CustomerAddress: String,
  CustomerCity: String,
  CustomerPinCode: Number,
  IsAvailable: { type: Boolean, default: true },
});

module.exports = mongoose.model("Customer", CustomerSchema);
