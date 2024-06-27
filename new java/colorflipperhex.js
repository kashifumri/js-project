const colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.getElementById("btn");
addEventListener("click",one);
 function one(){ let  spancolors="#";
    for(let i=0;i<6;i++)
    {
        spancolors+=random();
    }
    
    document.body.style.backgroundColor=spancolors;  
}
function random() {
return Math.floor(Math.random()*colors.length);
}
console.log(one());

