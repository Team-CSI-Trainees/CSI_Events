const presentevents= require("../models/presentevents");

const posteventDetails=async(req,res)=>{
   try{
      const detail=await presentevents.find({});
      return res.status(200).json(detail);

   }
   catch (error) {
      res.status(400).json(error.message);
    }
  }; 


module.exports=posteventDetails