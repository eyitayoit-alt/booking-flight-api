const flight=require("../models/Flight")

exports.removefromflight=(req,res)=>{
     const id=parseInt(req.params.id)
     const removed=flight.flightModel.splice(id,1)
     console.log("Flight Sucessfully removed");
   res.json( flight.flightModel);
    }