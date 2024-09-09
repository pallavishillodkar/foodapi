const mongoose = require("mongoose")

const PaymentSchema = mongoose.Schema({
    PaymentType: String,
    PaymentAmount: Number,
    PaymentStatus: String,
    PaymentDate: Date,
    OrderId: String
})

module.exports = mongoose.model("Payment", PaymentSchema)
