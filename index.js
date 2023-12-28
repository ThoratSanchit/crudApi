const express=require('express');
const bodyParser=require('body-parser');
const router=require('./router/router');
const app=express();
const PORT=3000;
app.use(bodyParser.json());
app.use('/extract',router);

app.listen(PORT,()=>{
    console.log('service is start');
})
