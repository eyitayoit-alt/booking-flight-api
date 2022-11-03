


const { json } = require("express")
const flight=require("../models/Flight")

exports.viewaflight=(req,res)=>{
       
   req.on("error",(error)=>{
   console.log(error)
   res.json(error)

   })
      
       const id=req.params.id
       res.json(flight.flightModel[id])
        
    }