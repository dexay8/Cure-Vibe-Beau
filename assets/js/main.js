



var data = [{
    id:1,
    Test:'COVID-19 RT-PCR TEST',
    Price:600,
    inCart:0
    },
    {
    id:2,
    Test:'TOTAL ERYTHROCYTE COUNT',
    Price:400,
    inCart:0
    },
    {
    id:3,
    Test:'TOTAL LEUCOCYTE COUNT (TLC)',
    Price:400,
    inCart:0
    },
    {
    id:4,
    Test:'DIFFERENTIATED LEUCOCYTE COUNT (DLC)',
    Price:400,
    inCart:0
    },
    {
    id:5,
    Test:'ERYTHROCYTE SEDIMENTATION RATE (ESR)',
    Price:400,
    inCart:0
    },
    {
    id:6,
    Test:'HEMOGLOBIN CONCENTRATION',
    Price:400,
    inCart:0
    },
    {
    id:7,
    Test:'PLATELET COUNT',
    Price:400,
    inCart:0
    },
    {
    id:8,
    Test:'CLOTTING TIME/PROTHROMBIN TIME',
    Price:300,
    inCart:0
    },
    {
    id:9,
    Test:'FIBRINOGEN ACTIVITY TEST',
    Price:600,
    inCart:0
    },
    {
    id:10,
    Test:'HEMOGLOBIN 1AC',
    Price:520,
    inCart:0
    },
    {
    id:11,
    Test:'ENZYMOLOGY',
    Price:875,
    inCart:0
    },
    {
    id:12,
    Test:'LIPID PROFILE TEST',
    Price:375,
    inCart:0
    },
    {
    id:13,
    Test:'LIVER FUNCTION TEST',
    Price:415,
    inCart:0
    },
    {
    id:14,
    Test:'BLOOD SUGAR TEST',
    Price:50,
    inCart:0
    },
    {
    id:15,
    Test:'THYROID PROFILE',
    Price:375,
    inCart:0
    },
    {
    id:16,
    Test:'SERUM CALCIUM TEST',
    Price:175,
    inCart:0
    },
    {
    id:17,
    Test:'SERUM IRON TEST',
    Price:575,
    inCart:0
    },
    {
    id:18,
    Test:'RENAL FUNCTION TEST',
    Price:1275,
    inCart:0
    },
    {
    id:19,
    Test:'URINE TEST',
    Price:275,
    inCart:0
    },
    {
    id:20,
    Test:'VITAMIN B COMPLEX TEST',
    Price:1600,
    inCart:0
    },
    {
    id:21,
    Test:'25 DEHYDROXY VITAMIN D TEST',
    Price:900,
    inCart:0
    },
    ];


    const tempdata=[];

    let books=document.querySelectorAll('.book');
    for(let i=0;i<books.length;i++)
    {
 books[i].addEventListener('click',()=>{
  const temp=data.filter(user => user.id=== i+1);
  

   // console.log(temp[0].Test);
   totalcost(data[i]);
    cartNumbers(data[i]);
 })
    }
function onloadcartnumber () {
   let productnumbers=localStorage.getItem('cart-number');
  const number=parseInt(productnumbers);
   if(number){
  
      document.querySelector('.cart1').textContent=productnumbers; 
   }
}
 function cartNumbers (product) {
    console.log("product clicked is ",product)
    let productnumbers=localStorage.getItem('cart-number');
    productnumbers=parseInt(productnumbers);
   if(productnumbers)
   {
      localStorage.setItem('cart-number',productnumbers+1);
      document.querySelector('.cart1').textContent=productnumbers+1;

   }
   else{
      localStorage.setItem('cart-number',1);
      document.querySelector('.cart1').textContent=1;
   }
   setitems(product);
 }
 function setitems(product){
    let cartitems=localStorage.getItem('productsincart');
    cartitems=JSON.parse(cartitems);
    if(cartitems!=null)
    {
       if(cartitems[product.Test]==undefined){
          cartitems={
             ...cartitems,
             [product.Test]:product
          }
       }
       cartitems[product.Test].inCart+=1;
    } else{
       product.inCart=1;
       cartitems={
          [product.Test]:product
       }
    }

    localStorage.setItem('productsincart',JSON.stringify(cartitems));
 }
 function totalcost(product){

    let cartcost=localStorage.getItem('totalcost');
    if(cartcost!=null)
    {
       cartcost=parseInt(cartcost);
     localStorage.setItem("totalcost",cartcost+product.Price)
    }
    else
    localStorage.setItem("totalcost",product.Price);
 }

 function displaycart (){
   let cartitems=localStorage.getItem("productsincart");
   cartitems=JSON.parse(cartitems);
   let checkoutcontainer=document.querySelector(".product");
   
   console.log(checkoutcontainer);
   if(cartitems&&checkoutcontainer){
      checkoutcontainer.innerHTML='';
      Object.values(cartitems).map(item=>{
       checkoutcontainer.innerHTML+=`<div class="product row">
       <div class="item ml-3 col-sm">
       <span>${item.Test}</span>
       </div>
       <div class="price col-sm">
       <span>${item.Price}</span>
       </div>
       <div class="quantity col-sm"><span>${item.inCart}<span></div>
       <div class="total col-sm"><span>${item.inCart*item.Price}</span></div>
       </div>`
      })
      let grandtotal=document.querySelector(".grandtotal");
      let totalcost=localStorage.getItem('totalcost');
      grandtotal.innerHTML+=`
      <div class="grandtotal mt-4">

      <span>Total payable amount</span>
      <span>${totalcost}</span>
      </div>
      
      `
   }
}

displaycart();
onloadcartnumber();


function deletelocalstorage(){
   localStorage.clear();
}