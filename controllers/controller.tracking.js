const {time_entry} = require('../models');

exports.get = async function(req,res){
    const data = await time_entry.findAll();
    try{
        if (data && data.length>0) {
            return res.status(200).json({
                success:true,
                statusCode:200,
                responseData:data,
                message:""
            }).end();    
        }else{
            return res.status(404).json({
                success:false,
                statusCode:404,
                responseData:data,
                message:"No record found"
            }).end();    
        }
        
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            statusCode:500,
            responseData:{},
            message:""
        }).end();
    }
    
}

exports.add =  async function(req,res){
    let {start_time, end_time} = req.body;
    data = await time_entry.create({start_time,end_time});
    return res.status(200).json({
        success:true,
        statusCode:200,
        responseData:[],
        message:"Record inserted successfully"
    }).end();  
};

exports.remove =  async function(req,res){
    let {id} = req.body;
    const data = await time_entry.destroy({
        where: {
            id: id
        }
    });
    return res.status(200).json({
        success:true,
        statusCode:200,
        responseData:[],
        message:"Record deleted successfully"
    }).end();  

};