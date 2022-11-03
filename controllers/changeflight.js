const flight=require("../models/Flight")

exports.changeaflight=(req,res)=>{
 const id=parseInt(req.params.id)
 const flightUpd=req.body;
 flight.flightModel[id]=req.body
 console.log("Flight Sucessfully Changed");
 res.json(flight.flightModel)
    
}