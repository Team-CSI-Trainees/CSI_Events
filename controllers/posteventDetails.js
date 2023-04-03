const events = require("./events");

const posteventDetails=async(req,res)=>{
   const role=req.body.role;
   const eventdetail= events(role);
   const detail=await eventdetail.find({});
   return res.status(200).json(detail);   

}
module.exports=posteventDetails