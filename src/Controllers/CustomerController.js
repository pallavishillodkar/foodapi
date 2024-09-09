const { response } = require("express");
const Customer = require("../Models/CustomerSchema");

//add Customer
exports.addCustomer = async (request, response) => {
  try {
    let result = await Customer.create(request.body);
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json(error);
  }
};

//allCustomer user
exports.allCustomers = async (request, response) => {
  try {
    let result = await Customer.find();
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json(error);
  }
};

// doLogin
exports.doLogin = async (req, res) => {
  try {
    const result = await Customer.findOne(req.body);
    if (!result) {
      const message = {
        message: "Login Fail",
        data: result,
      };
      res.status(200).json(message);
    } else {
      const message = {
        message: "Login Success",
        data: result,
      };
      res.status(200).json(message);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//delete Customer
exports.deleteCustomer = async (req,res ) => {
  try {
    const result = await Customer.findByIdAndDelete({_id: req.body.customerid,});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

//update Customer
exports.updateCustomer = async (request, response) => {
  try {
    const result = await Food.findByIdAndUpdate(
      request.body.customerid,
      { CustomerPrice: request.body.CustomerPrice },
      { new: true }
    );
    response.status(200).json(result);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};
