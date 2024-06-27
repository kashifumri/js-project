const textvalue=document.querySelector('#text');
let curvalue=0;

const dicrease=document.querySelector('.dic');
let reset=document.querySelector('.reset');
 const increase=document.querySelector('.inc');
increase.addEventListener('click',function (){
console.log("hello");
curvalue++;    
console.log(curvalue);
textvalue.innerHTML=curvalue;
});
dicrease.addEventListener('click',function(){
    curvalue--;
    textvalue.innerHTML=curvalue;
});
reset.addEventListener("click",function(){
    curvalue=0;
    textvalue.innerHTML=curvalue;
})
