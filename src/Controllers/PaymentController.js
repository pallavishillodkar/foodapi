const { response } = require("express")
const Payment = require("../Models/PaymentSchema")

//add Payment
exports.addPayment = async (request, response) => {
    try {
        let result = await Payment.create(request.body)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json(error)
    }
}

//allPayment user
exports.allPayments = async (request, response) => {
    try {
        let result = await Payment.find()
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json(error)
    }
}

//delete Payment
exports.deletePayment = async (request, response) => {
    try {
        const result = await Payment.findByIdAndDelete({ _id: request.body.paymentid })
        response.status(200).json(result)
    } catch (error) {
        response.status(500).send(error)
    }
}

//update Payment
exports.updatePayment = async (request, response) => {
    try {
        const result = await Payment.findByIdAndUpdate(
            request.body.Paymentid,
            { PaymentPrice: request.body.PaymentPrice },
            { new: true }
        )
        response.status(200).json(result)
    } catch (error) {
        console.log(error)
        response.status(500).json(error)
    }
}
