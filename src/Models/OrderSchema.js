const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    OrderDate: { type: Date, default: new Date() },
    OrderStatus: { type: String, default: "Pending" },
    OrderTotalAmount: Number,
    CustId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer"},
    // FoodId: String
    FoodItems: [{
        Qty: Number,
        FoodId: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
    },],
});

module.exports = mongoose.model("Order", OrderSchema);

// {
    // "OrderData":"2024-04-01",
    // "OrderStatus":"Nvb",
    // "OrderTotalAmount":240,
    // "CusId":"mkm",
    // "FoodId":"plkj"

// }
