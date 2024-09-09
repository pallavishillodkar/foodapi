const { response } = require("express");
const Order = require("../Models/OrderSchema");

//add Order
exports.addOrder = async (request, response) => {
  try {
    let result = await Order.create(request.body);
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json(error);
  }
};

//allOrder user
exports.allOrders = async (request, response) => {
  try {
    let result = await Order.find()
      .populate("CustId")
      .populate("FoodItems.FoodId");
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json(error);
  }
};

// orderById
exports.orderById = async (req, res) => {
  try {
    const result = await Order.findOne({ _id: req.body.orderid })
      .populate("FoodItems.FoodId")
      .populate("CustId");
    res.status(200).json(result);
  } catch (error) {
    res.status(200).send(error);
  }
};

//delete Order
exports.deleteOrder = async (request, response) => {
  try {
    const result = await Food.findByIdAndDelete({ _id: request.body.orderid });
    response.status(200).json(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

//update Order
exports.updateOrder = async (request, response) => {
  try {
    const result = await Order.findByIdAndUpdate(
      request.body.orderid,
      { OrderStatus: request.body.OrderStatus },
      { new: true }
    );
    response.status(200).json(result);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};
