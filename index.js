// plus button action
var plusbtn=document.getElementById('plusbtn');
plusbtn.addEventListener('click',function(){
    var inputvalue=document.getElementById('inpt').value;
   inputvalue=parseFloat(inputvalue);
   var plusplus=inputvalue+1;
   var inputvalue=document.getElementById('inpt').value=plusplus;
   var plustext=document.getElementById('plustext').innerText;
   plustext=parseFloat(plustext);
   var totalamount=plustext+1219;
   var plustext=document.getElementById('plustext').innerText=totalamount;
   

   

   
})///

// minus button action
var minusbtn=document.getElementById('minusbtn');
minusbtn.addEventListener('click',function(){
    var inputvalue=document.getElementById('inpt').value;
    inputvalue=parseFloat(inputvalue);

    if(inputvalue>0){
var updateinpt=inputvalue-1;
var inputvalue=document.getElementById('inpt').value=updateinpt;
var plustext=document.getElementById('plustext').innerText;
plustext=parseFloat(plustext);
var totalamount=plustext-1219;
var plustext=document.getElementById('plustext').innerText=totalamount;}
else{}
    
})