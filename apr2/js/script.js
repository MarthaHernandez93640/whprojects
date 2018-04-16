// varp1=document.getElementById('p1');
// console.log(p1);

// varp1q=document.querySelector('#p2');
// console.log(p1q);

// varpclass=document.querySelector('.p');
// console.log(pclass);

// varplast=document.querySelector('p:last-of-type');
// console.log(plast);
// plast.style.fontsize='28px';

// varpclasses=document.querySelector('.p');
// console.log(pclasses);
// pclasses[2].style.fontsize='8px';
// pclasses[1].style.color='red';
// pclasses[3].style.fontweight='boldest';

// varpbyclassname=document.getElementsByClassName('p');
// console.log(pbyclassname);
// pbyclassname[0].style.fontsize='32px';

// var pByTagname=document.getElementsByTagName('p');
// console.log(pByTagname);
// // pbytagname[9].style.color='yellow';
// console.log(pByTagname.length);

// FOR LOOP
// | ---------------| ARGUMENTS
// |---------|NEW VARIABLE
//           |------|NUMBER OR LOOPS
//                   |---|INCREMENTOR  
// for (var i = 0; i <10; i++){
//     pByTagname[i].style.color='red';
//     console.log(i);
// // }
// var myname='martha';
// console.log(myname.length);
// for (var i = 0; i < 7; i++){
//     console.log[i];
// }
// loops through each letter logging in to the browser

// function func1(){}
    // func1(passUsersName){}
// function func2(getUsersName){}
// console.log(getUsersName){}

//  function getUsersName(){
//      var username = prompt("your name");
//      console.log(username = 'from inside the function');
//      printUsername(username);
//  }
//  consol.log(username='from outside the function');
//  getUsersName();
//  function printUsername(x){
//     for(var i = 0; i < x.length; i++){
//         console.log(x[i]);
//     }
//  }
// // GET USERS TWO NUMBERS 
// function getUsersName(){
//     var num1 = prompt('please enter a number');
//     var num2 = prompt('please enter another number');
//     addUserNums(num1, num2);
// }
// function addUserNums(x, y){
//     alert(parseInt(x) + parseInt(y));
// }
// getUserNums();
var paragraphs = document.querySelectorAll('p');

function getUserColors(){
    var color1 = prompt('plaese pick a color');
    var color2 = prompt('plaese pick a color');
    var color3 = prompt('plaese pick a color');

    assignUserColors(color1, color2, color3);
}
function assignUserColors(){
    for(var i = 0; i < arguments.length; i++){
        paragraphs[i].style.color = arguments[i];
    }
}
getUserColors();
