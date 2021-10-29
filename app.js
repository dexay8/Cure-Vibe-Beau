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
  app.get('/test',function(req,res){
    res.sendFile(path.join(__dirname+'/views/testpage.html'));
    //__dirname : It will resolve to your project folder.
  });
  app.get('/shop',function(req,res){
    res.sendFile(path.join(__dirname+'/views/shoppage.html'));
    //__dirname : It will resolve to your project folder.
  });
  app.get('/calculators',function(req,res){
    res.sendFile(path.join(__dirname+'/views/calculatorspage.html'));
    //__dirname : It will resolve to your project folder.
  });
  app.get('/calculators/bmi',function(req,res){
    res.sendFile(path.join(__dirname+'/views/bmi.html'));
    //__dirname : It will resolve to your project folder.
  });
  app.get('/calculators/whr',function(req,res){
    res.sendFile(path.join(__dirname+'/views/whr.html'));
    //__dirname : It will resolve to your project folder.
  });
  app.get('/report',function(req,res){
    res.sendFile(path.join(__dirname+'/views/reportpage.html'));
    //__dirname : It will resolve to your project folder.
  });
  app.get('/checkout',function(req,res){
    res.sendFile(path.join(__dirname+'/views/checkoutpage.html'));
    //__dirname : It will resolve to your project folder.
  });
const port=process.env.PORT||5000
 
app.listen(port,()=>{
    console.log(`listening to the port number at ${port}`);
})