let img=document.querySelector(".img");
const container=document.querySelector(".container");
const link=document.querySelector(".new-links");
const input=document.querySelector(".input");
const atomic=document.querySelector(".atomic");
const images=document.querySelector(".images");
const imgsearch=document.getElementsByClassName("img-search");
img.addEventListener("click",function(){
   console.log("hello");
  
   if(link.style.display=="block") 
   {link.style.display="none";
  
   
   }
   else
   {
      link.style.display="block";
      //container.style.backgroundColor=yellow;//
      
   }
});

const search=()=>{
   const searchbox=document.getElementById("input").value.toUpperCase();
   const product-list=document.getElementById("imgcontainer");
   const product=document.querySelectorAll("#new-image");
   const h2=document.getElementsByTagName("h2");
   for(let i=0; i<searchbox.length; i++){
      match=product[i].h2[0];console.log("hello world");
         if(match){
            let textvalue=match.textContent||match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox)>-1){
               product[i].style.display="block";
               console.log("hello world");
            }else{
               product[i].style.display="none";
               console.log("hello world");
            }
         }
   }
}