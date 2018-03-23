var menu=document.getElementById('menu');
var username=document.getElementById('username');
var userstyle=document.getElementById('userstyle');

var nav=document.getElementById('nav');
var main=document.getElementById('main');
var user=document.getElementById('user');
var a1=document.getElementById('a1');
var a2=document.getElementById('a2');

menu.addEventListener('click',vertmenue);
username.addEventListener('click', getusername);
userstyle.addEventListener('click', styleusername);
a1.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e);
});
a2.addEventListener('click', colortext2);

function changebody(){
    document.body.style.backgroundcolor="red";

}
function vertmenue(){
    nav.classList.toggle('vertical');
    main.classList.toggle('vertical');
}
function getusername(){
    username=prompt('what is your name?');
    user.innerHTML=username;
}
function styleusername(){
    user.classList.add('mega');
}
function colortext1(){
    a1.style.color="magenta";
}
function colortext2(){
    a2.style.color="yellow";
}