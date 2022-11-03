
const flight=require("../models/Flight")



exports.addtoflight=(req,res)=>{
   
    req.on('error',(error)=>{
      console.log(error)
      res.sendStatus(400)
    }
    )
   

   const body=req.body;
   flight.flightModel.push(body);
   res.json(flight.flightModel);
   
}