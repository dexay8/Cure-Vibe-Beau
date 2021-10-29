const express=require('express');
const path = require('path');
const app=express();
const firebase=require("firebase");
const moment=require("moment")
app.use(express.static('assets'));
const config = {
  apiKey: "AIzaSyDW5-Szhn5ruui9xPVGqDGQ5ObQ2VYma8k",
  authDomain: "cure-vibe-beau.firebaseapp.com",
  databaseURL: "https://cure-vibe-beau-default-rtdb.firebaseio.com",
  projectId: "cure-vibe-beau",
  storageBucket: "cure-vibe-beau.appspot.com",
  messagingSenderId: "262834749571",
  appId: "1:262834749571:web:09da42fa5c78eee9b0dbb6",
  measurementId: "G-SXR0ZGKPD7"
};
firebase.initializeApp(config);
 const auth = firebase.auth();
 const firestore = firebase.firestore();

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
  app.get('/downloadinvoice',async(req,res) => {
 
    createInvoice(tempgenralinfo,tempdata,res)
    

    });
  const port=process.env.PORT||5000




const tempdata=[];
const tempgenralinfo=[{
  Name:'Aryan basu',
  Payement:'Cash',
}]
  app.listen(port,()=>{
    
    firebase.database().ref('temp').on('value', (snapshot) => {
      tempdata.push(snapshot.val());
    
    })
    //console.log(tempdata);
    console.log(`listening to the port number at ${port}`);
  })
  



/*                   DOWNLOAD INVOICE PART                             */

var today = new Date();
var year = today.getFullYear();
var mes = today.getMonth()+1;
var dia = today.getDate();
var fecha =dia+"-"+mes+"-"+year;
var randomnumber = Math.floor(Math.random() * (999999999999 - 100000000000 + 1)) + 100000000000;

const fs = require("fs")
const PDFDocument = require("pdfkit");



function  createInvoice(tempgenralinfo,tempdata,path) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });
  // console.log(invoice);
   //console.log(snapshot.val());
   //console.log(foodinfo.length);
//console.log(foodinfo);
 var n=0; 
var k=0;
    n=tempgenralinfo.length;
  //  if(n!==0)
    n=n-1;

  //console.log(foodinfo.length);

  generateHeader(doc);
  generateCustomerInformation(doc, tempgenralinfo,n);
  generateInvoiceTable(doc, tempdata,k);
  generateFooter(doc);

  doc.end();
  doc.pipe(path);
}

function generateHeader(doc) {
//console.log(foodinfo);
  doc
  .image("./assets/images/logo.jpg", 50, 45, { width: 50 })
    .fillColor("#444444")
    .fontSize(20)
    .text("Cure Vibe Beau Inc.", 110, 57)
    .fontSize(10)
    .text("Cure Vibe Beau Inc.", 200, 50, { align: "right" })
    .text("FASSAI-NO : 1271403800659", 200, 65, { align: "right" })
    .text("GSTIN : 09AAECK7896D1Z2", 200, 80, { align: "right" })
    .text("D-58/A-2,GMCH CHANDIGARH -144006", 200, 95, { align: "right" })
    .moveDown();
}

function generateCustomerInformation(doc, tempgenralinfo,n) {
 
  //console.log(tempgenralinfo[0].Name);
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Invoice", 50, 160);

  generateHr(doc, 185);

  const customerInformationTop = 200;

  doc
    .fontSize(10)
    .text("Invoice Number:", 50, customerInformationTop)
    .font("Helvetica-Bold")
    .text(randomnumber, 150, customerInformationTop)
   // .text(  customerInformationTop)
    .font("Helvetica")
    .text("Invoice Date:", 50, customerInformationTop + 15)
     .text(moment().format('MMMM Do YYYY, h:mm:ss a'), 150, customerInformationTop + 15)
     .text("Mode of Payment :", 50, customerInformationTop + 30)
     .text(
       tempgenralinfo[n].Payement,
       150,
       customerInformationTop + 30
     )

    .font("Helvetica-Bold")
    .text(tempgenralinfo[n].Name, 410, customerInformationTop)
    .font("Helvetica")
   // .text(invoice.shipping.address, 300, customerInformationTop + 15)
    /*.text(
      invoice.shipping.city +
        ", " +
        invoice.shipping.state +
        ", " +
        invoice.shipping.country,
      300,
      customerInformationTop + 30 
    ) */
    //.moveDown();

  generateHr(doc, 252);
}

function generateInvoiceTable(doc, tempdata,k) {
  let i;
  //console.log(tempdata);
  const invoiceTableTop = 330;

  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    invoiceTableTop,
    "Item",
    "Unit Cost",
    "Quantity",
    "Total (Including GST) "
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font("Helvetica");
var sum=0;
  for (i = 0; i < tempdata[k].length; i++) {
    const item = tempdata[k][i];
    //console.log(item);
    const position = invoiceTableTop + (i + 1) * 30;
    generateTableRow(
      doc,
      position,
      item.Test,
      item.Price+" Rs",
      item.Incart,
      item.Total+" Rs"
    );
sum=sum+item.Total;

    generateHr(doc, position + 20);
  }
  const subtotalPosition = invoiceTableTop + (i + 1) * 30;
  generateTableRow(
    doc,
    subtotalPosition,
    "",
    "",
    "Total",
    sum+" Rs"
  );

  const paidToDatePosition = 0;
 /* generateTableRow(
    doc,
    paidToDatePosition,
    "",
    "",
    "Paid To Date",
    "",
    //formatCurrency(invoice.paid)
  );
 /* const duePosition = paidToDatePosition + 25;
  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    duePosition,
    "",
    "",
    "Balance Due",
    "",
    //formatCurrency(invoice.subtotal - invoice.paid)
  ); */
  doc.font("Helvetica");
}

function generateFooter(doc) {
  doc
    .fontSize(10)
    .text(
      "Thank you for your business.",
      50,
      780,
      { align: "center", width: 500 }
    );
}

function generateTableRow(
  doc,
  y,
  item,
  unitCost,
  quantity,
  lineTotal
) {
  doc
    .fontSize(10)
    .text(item, 50, y)
    .text(unitCost, 230, y, { width: 90, align: "right" })
    .text(quantity, 280, y, { width: 90, align: "right" })
    .text(lineTotal, 0, y, { align: "right" });
}

function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

function formatCurrency(cents) {
  return "$" + (cents / 100).toFixed(2);
}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + "/" + month + "/" + day;
}