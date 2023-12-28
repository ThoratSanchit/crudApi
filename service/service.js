const schema=require('../model/model');
const app={
    addData:async(data)=>{
        return await schema.create(data);
    },
    updateData:async(id)=>{
        return await schema.findByIdAndDelete(id);
    },
    updateData:async(id,data)=>{
        return await schema.findByIdAndUpdate(id,data,{new:true})
    },
    getData:async()=>{
      return await schema.find();
    }
}

module.exports=app;