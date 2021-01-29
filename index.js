// plus button action
var plusbtn=document.getElementById('plusbtn');
plusbtn.addEventListener('click',function(){
    var Input=document.getElementById('inpt');
   inputvalue=parseFloat(Input.value);
   var newinptvalue=inputvalue+1;
   Input.value=newinptvalue
    var totalamount=newinptvalue*1219;
 var plustext=document.getElementById('plustext').innerText=totalamount;
   })///


// minus button action
var minusbtn=document.getElementById('minusbtn');
minusbtn.addEventListener('click',function(){
    var Input=document.getElementById('inpt');
    inputvalue=parseFloat(Input.value);

    if(inputvalue>0){
var newinptvalue =inputvalue-1;
Input.value=newinptvalue;
var totalamount=newinptvalue*1219;
var plustext=document.getElementById('plustext').innerText=totalamount;}

}) //

// // remove style
// var removebtn=document.getElementById('remove');
// removebtn.addEventListener('click',function(){
//    var cart1=document.getElementById('cart1');
//    cart1.style.display="none";
// })