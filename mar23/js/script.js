document.getElementById('body').style.background="red";

// PLACE ALL VARIABLES WITH CORRECT TARGETS HERE
var person=prompt("Please enter your name");






// PLAVE ALL EVENTLISTENERS HERE
document.getElementById('welcome').innerHTML=(""+person+"");
document.getElementById('first').addEventListener("click", first);
document.getElementById('last').addEventListener("click", last);
document.getElementById('addy').addEventListener("click", addy);

// PLACE ALL FUNCTIONS HERE 
function hi(){
    prompt('enter your name');
}
function first(){
    prompt('what is your first name?');
}
function last(){
    prompt('what is your last name?');
}
function addy(){
    prompt('what is your address?');
}