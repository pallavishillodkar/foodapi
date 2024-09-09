const { response } = require("express")
const Food = require("../Models/FoodSchema")

//add Food
exports.addFood = async (request, response) => {
    try {
        let result = await Food.create(request.body)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json(error)
    }
}

//allFood user
exports.allFoods = async (request, response) => {
    try {
        let result = await Food.find()
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json(error)
    }
}

//delete Food
exports.deleteFood = async (request, response) => {
    try {
        const result = await Food.findByIdAndDelete({ _id: request.body.foodid })
        response.status(200).json(result)
    } catch (error) {
        response.status(500).send(error)
    }
}

//update Food
exports.updateFood = async (request, response) => {
    try {
        const result = await Food.findByIdAndUpdate(
            request.body.foodid,
            { FoodPrice: request.body.FoodPrice },
            { new: true }
        )
        response.status(200).json(result)
    } catch (error) {
        console.log(error)
        response.status(500).json(error)
    }
}
