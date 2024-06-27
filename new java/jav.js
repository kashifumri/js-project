const name1= document.querySelector('.flavour')
name1.style.color='orange';
name1.style.backgroundColor='olive';
//const name2=document.getElementsByClassName("itemc");
//const name3=document.getElementsById("itemi");
//console.log(name2);
//name2[0].style.color='pink';
//console.log(name1.childNodes);
//console.log(name1.lastChild);
//console.log(name1.firstChild);
//console.log(name1.parentElement.parentElement");
const first=document.querySelector('.first');
//const second=first.nextSibling.nextSibling.style.color='red';
//const second=first.nextElementSibling.style.color='red';
//const second=first.nextElementSibling.textContent;
//previoussibling
//console.log(second);
//classvalue=first.getAttribute('class')
//idvalue=first.getAttribute('id')
///setvalue=name3.setAttribute('class','first');
///setvalue.textcontent='the new actor is ritik'
///console.log(setvalue);
class_name=first.className='h2 main';
console.log(class_name);
first.classList.add('h2')
//class_list=first.classList.remove('h2');
//console.log(class_list);
element1=document.createElement('h2')
element2=document.createTextNode('hello kashif')
element1.appendChild(element2);
console.log(element1);
h1=document.querySelector('.h1');
h1.appendChild(element1);
h1.insertBefore(element1,h1.childNodes[0]);
h1.addEventListener('click',newe);
function newe(){
    const newkey=e.target;
    console.log(newkey);
    
}

