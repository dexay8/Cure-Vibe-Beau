const express=require('express');
const path = require('path');
const app=express();
app.use(express.static('assets'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/views/login.html'));
    //__dirname : It will resolve to your project folder.
  });
  app.get('/home',function(req,res){
    res.sendFile(path.join(__dirname+'/views/homepage.html'));
    //__dirname : It will resolve to your project folder.
  });
  app.get('/tests',function(req,res){
    res.sendFile(path.join(__dirname+'/views/tests.html'));
    //__dirname : It will resolve to your project folder.
  });
const port=process.env.PORT||5000
 
app.listen(port,()=>{
    console.log(`listening to the port number at ${port}`);
})