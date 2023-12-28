const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/store');
const schema= new mongoose.Schema({},{strict:false});
const model=mongoose.model('ddataStore',schema);
module.exports=model;
