const flight=require("../models/Flight")

exports.example = (req, res) => {
    console.log("flight")
    res.json(flight.flightModel)
}