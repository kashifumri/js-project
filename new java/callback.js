const introduction=()=>{
    console.log("my name kashif umri");
    console.log("how many students in your class?");
}
let a;
let b;

const nostudents=(a,b,fun)=>{
    console.log("my total friends are "+a+b);  
    fun();
} 
nostudents(20,40,introduction);   
