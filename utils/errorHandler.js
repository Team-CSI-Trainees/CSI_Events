const error=(res,status)=>{
    try {
        if(status===500){
            return res.status(status).json({message:"Check Entries"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
    }
    module.exports=error;