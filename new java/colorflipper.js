const colors=["red","blue","purple","green"];
let clicks=document.getElementById('btn');
console.log(document);
const spancolors=document.getElementsByClassName("spancolor");
console.log(colors); 
clicks.onclick=()=>{
let randomnum=random();
console.log(randomnum);
document.body.style.backgroundColor=colors[randomnum];
spancolors.innerHTML=colors[randomnum];
};
function random(){
return Math.floor(Math.random()*colors.length);
}
console.log(random());