
let result = document.getElementById("result");

function generateOTP(){

   let show =  Math.floor(Math.random()*1000000)
  
   if(show >= 5){
    result.innerHTML = show;
   }
}
