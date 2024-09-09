const express = require("express");
const router = express.Router();

const CustomerController = require("../Controllers/CustomerController");
router.post("/addcustomer", CustomerController.addCustomer);
router.get("/allcustomers", CustomerController.allCustomers);
router.post("/dologin", CustomerController.doLogin);
router.delete("/deletecustomer", CustomerController.deleteCustomer);
router.put("/updatecustomer", CustomerController.updateCustomer);

const FoodController = require("../Controllers/FoodController");
router.post("/addfood", FoodController.addFood);
router.get("/allfoods", FoodController.allFoods);
router.delete("/deletefood", FoodController.deleteFood);
router.post("/updatefood", FoodController.updateFood);

const OrderController = require("../Controllers/OrderController");
router.post("/addorder", OrderController.addOrder);
router.get("/allorders", OrderController.allOrders);
router.post("/orderbyid", OrderController.orderById);
router.delete("/deleteorder", OrderController.deleteOrder);
router.put("/updateorder", OrderController.updateOrder);

const PaymentController = require("../Controllers/PaymentController");
router.post("/addpayment", PaymentController.addPayment);
router.get("/allpayments", PaymentController.allPayments);
router.delete("/deletepayment", PaymentController.deletePayment);
router.put("/updatepayment", PaymentController.updatePayment);

//contactus
const ContactUs = require("../Controllers/ContactUs");
router.post("/addcontact",ContactUs.addcontact);
router.get("/getallcontactlist",ContactUs.getallcontactlist);

module.exports = router;
