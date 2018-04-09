// function welcomemsg(str){
//     // console.log(str);
//     return "Welcome"+ str;
// }

// // consoleinfo('Martha');
// console.log(welcomemsg('Martha'));



// function calcnums(x, y){
//     // console.log(x+y);
//     return x + y;
// }

// console.log( calcnums(3,2) );
// // calcnums(3,2);

// var h3 = document.querySelector('h3');

// function concatstrings(str1, str2){
//     return str1 + " " + str2;
// }

// function getfirstname(){
//     return prompt('what is your first name?');
// }

// function getlastname(){
//     return prompt('what is your last name?');
// }

// user.textcontent=concatstrings(getfirstname(), getlastname(),);
// HTML.innerhtml=concatstrings(getfirstname(), getlastname(),);

// welcomeuser();


var spans=document.querySelectorAll('span');
var occupations=['janitor', 'teacher', 'developer', 'plumber', 'cashier', 'bus driver'];
var plural=['fish', 'monkeys', 'shoes', 'cactii'];
var adjective=['pretty', 'special', 'short', 'ugly'];
var verb=['hear', 'slept', 'slapped', 'walked'];
var number=['5', '2', '4', '9'];
var place=['santa cruz', 'the desert', 'the ocean', 'India'];
var famous=['beyonce', 'brad pitt', 'bernie sanders', 'trump'];
var liquid=['soda', 'gasoline','soap', 'alcohol'];
var noun=['cat', 'dog', 'the louve', 'france'];
var nation=['native', 'hawaiian', 'latino', 'african american'];
var female=['angelina jolie', 'ertha kit', 'betty white', 'madonna'];
var friend=['sandy', 'nadia', 'beatriz', 'michelle'];





for(var i = 0; i < spans.length; i++){

    //  SWITCH STATEMENT
   
    switch(spans[i].className){
        case 'occupation':
            spans[i].textContent=occupations[getrandumnum(occupations.length)];
            break;
        case 'plural':
            spans[i].textContent=plural[getrandumnum(plural.length)];
            break;
        case 'adjective':
            spans[i].textContent=adjective[getrandumnum(adjective.length)];
            break;
        case 'number':
            spans[i].textContent=number[getrandumnum(number.length)];
            break;
        case 'verb':
            spans[i].textContent=verb[getrandumnum(verb.length)];
            break;
        case 'place':
            spans[i].textContent=place[getrandumnum(place.length)];
            break;
        case 'famous':
            spans[i].textContent=famous[getrandumnum(famous.length)];
            break;
        case 'liquid':
            spans[i].textContent=liquid[getrandumnum(liquid.length)];
            break;
        case 'noun':
            spans[i].textContent=noun[getrandumnum(noun.length)];
            break;
        case 'nation':
            spans[i].textContent=nation[getrandumnum(nation.length)];
            break;
        case 'female':
            spans[i].textContent=female[getrandumnum(female.length)];
            break;
        case 'friend':
            spans[i].textContent=friend[getrandumnum(friend.length)];
            break;
         
        default:
            
    }
}

function getrandumnum(num){
    return Math.floor(Math.random() * num);
}