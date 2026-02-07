let button  =  document.querySelector(".button button");
let input  =  document.querySelector(".email input");
let error =  document.querySelector(".error");


button.addEventListener("click",(ev)=>{

 let text  =  input.value.trim();

 if (text==""){

   input.style.border = "2px solid red";
   error.style.display="flex";
   return ;
 }
   let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if ( !pattern.test(text)){


      input.style.border = "2px solid red";
   error.style.display="flex";  
   return;

   
   }

   else{
     input.style.border = "2px solid green";
    error.style.display="none";

   }

})