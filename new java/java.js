var fullname = "kashif umri";  
var age= 20;
var email_id="kashif@123";
var course="btech";
var id_identified=false;
if(id_identified) 
{ console.log("show next page");
    
}
else{
    console.log("show the previous page");
}
var num1;
var num2;
var opcode;
function calci(num1,num2)
{  
    switch("3")
    {
        case "+":
            console.log(num1+num2);
            break;
        case "-":
            console.log(num1-num2);
            break;                
        case "*":
            console.log(num1*num2);
            break;
        case "/":
            console.log(num1/num2);
            break;
        default:
            console.log("wrong opcode entered");                 

    }
}

console.log(calci(3,5));
