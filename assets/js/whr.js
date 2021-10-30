var age = document.getElementById("age");
var waist = document.getElementById("waist");
var hip = document.getElementById("hip");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");

function validateForm(){
  if(age.value=='' || waist.value=='' || hip.value=='' || (male.checked==false && female.checked==false)){
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", countWHR);
  }else{
    countWHR();
  }
}
document.getElementById("submit").addEventListener("click", validateForm);

function countWHR(){
  var p = [age.value, waist.value, hip.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }
  form.reset();
  var whr = (Number(p[1])/(Number(p[2])));
      
  var result ="";
  if(male.checked){
       if(whr<0.95){
      result = "Low Health Risk";
       }
       else if(0.95<=whr&&whr<1.00){
      result = "Moderate Health Risk";
       }
       else if(1.00<=whr){
      result = "High Health Risk";
       }
  }
  else if(female.checked){
    if(whr<0.80){
   result = "Low Health Risk";
    }
    else if(0.80<=whr&&whr<0.85){
   result = "Moderate Health Risk";
    }
    else if(0.85<=whr){
   result = "High Health Risk";
    }
}
  
  var h2 = document.createElement("h2");
  var h3 = document.createElement("h3");

  var t = document.createTextNode(result);
  var b = document.createTextNode('Waist To Hip Ratio: ');
  var r = document.createTextNode(parseFloat(whr).toFixed(2));
  
  h2.appendChild(t);
  h3.appendChild(b);
  h3.appendChild(r);
  
  document.body.appendChild(h2);
  document.body.appendChild(h3);
  document.getElementById("submit").removeEventListener("click", countWHR);
  document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countWHR);