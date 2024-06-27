const reviews=[
    {
        sequence:0,
        img:"/img/Charles-Dickens-writing-.jpg",
        para:"He is the best novelist of all time and writes all the psychological theory based novels"

    },
    {
        sequence:1,
        img:"/img/novel1.jpg",
        para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, fuga eligendi? Dolore, nesciunt nostrum? Qui necessitatibus vero quasi distinctio facere alias namHe is the best novelist of all time and writes all the psychological theory based novels"
        
    },
    {
        sequence:2,
        img:"/img/jkrowling.jpg",
        para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, fuga eligendi? Dolore, nesciunt nostrum? Qui necessitatibus vero quasi distinctio facere alias nam, tenetur culpa obcaecati molestiae dolorem, quis saepe. Voluptate."
    }
]


const imgs=document.getElementById("imgs");
const para=document.getElementById("para"); 
const random=document.getElementById("random");
const previ=document.getElementById("prev");
const next=document.getElementById("next");
let currentview=-1;
next.addEventListener("click",function(){

    currentview++;
    if(reviews.length-1<currentview){
    currentview=0;
    }
   main(currentview);
});
function main(person){
    
console.log("hello world");
 let value=reviews[person];
imgs.src=value.img;
para.textContent=value.para;

}

previ.addEventListener("click",function(){

    currentview--;
    if(currentview<0){
        currentview=reviews.length-1;
    }
        main(currentview);
    
    });
    random.addEventListener("click",function(){
        currentview= Math.floor(Math.random()*reviews.length);
        main(currentview);
    
    });
    


