document.getElementById('btn2').style.color="red";

console.log("Here is my first console message");
console.info("This is info");
console.warn("Danger will robinson");
console.error("Uh Uh uh. You didnt say the magic word.");

// Browser Alert Box
// alert('Here is my popup.');

// Broswer Confirm Box
// var userResult=confirm("did you remember to lock your car?");
// console.log(userResult);


// var mardy=prompt("what is your name");
// console.log(mardy);

// variables must start with a lowercase, must start with a letter. can contain underscore. cannot have a dash or hyphen. may contain camelcasing. 

var username; 
var room1;
var user_name;
var userName;
var theUsersFirstNameOnly;

// math
var age=27;
var decade=10;
var double=2;
var divide=4;
// divide result by 4
var newAge=(age+decade)*double/divide;
// pendas matters!
console.log(newAge);

// concatination
// var firstname=prompt("what is your first name?");
// var lastname=prompt("what is your last name?");
// alert(firstname+lastname);

// // string interpolation
// alert(`${firstname} ${lastname}`);

// prompt user for make of vehicle
// the year
// the color
// alert the result

// 3 new variables
// formatting: color, year, make.

// function getUserVehicle(){
// var color=prompt("vehicle color?");
// var make=prompt("what make?");
// var year=prompt("what year?");
// var result=color+" "+make+" "+year+".";
// alert(result);
// }

// function primaryuser(){
//     var first=prompt("what is your first name?");
//     var last=prompt("what is your last name?");
//     var place=prompt("where were you born?");

//     document.getElementById('primaryuser').innerHTML=first +" "+ last +" born in "+ place;
// }
function username(){
    var username=prompt("write user name");
    var password=prompt("write password");
    var email=prompt("write your email");
    document.getElementById('username').innerHTML=username + password + email;
}
function adress(){
    var name=prompt("first and last name");
    var adress=prompt("write your address");
    var phone=prompt("write your number");
    document.getElementById('adress').innerHTML=name + adress + number;
}
