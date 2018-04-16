

// // // function getUserName(){
// // //     var username=prompt('what is your full name').split(" ");
// // //     // var splitUsername=username,.split(" ");
// // //     // console.log(username);
// // //     outputUsername(username);
// // // }
// // // function outputUsername(nameArray){
// // // // document.getElementById('firstname').innerHTML=nameArray[0];
// // // // // nameArray
// // // // document.getElementById('lastname').innerHTML=nameArray[nameArray.length-1];
// // // for(var i = 0; i < nameArray.length; i++){
// // //     if(i==0 || i== nameArray.length-1){
// // //         console.log("we got the zeroth element!", nameArray[i]);
// // //         document.getElementById('firstname').innerHTML += nameArray[i]+" ";
// // //     }else{
// // //         console.log("not the zeroth");
// // //     }
// // // }
// // // }

// // // getUserName();


// // // var stuff = ["jeep", "subaru", "honda"];
// // // console.log(stuff[1]);
// // // console.log(stuff.length);

// // // PUSH METHOD
// // // stuff.push("bmw");
// // // console.log(stuff);

// // // pop method
// // // stuff.pop();
// // // console.log(stuff);

// // // var removedCar=stuff.pop();
// // // console.log(stuff);
// // // console.log(removedCar);

// // // unshift method
// // stuff.unshift("chevy", "chrystler");
// // console.log(stuff);

// // // shift method
// // stuff.shift();
// // console.log(stuff);

// // // splice method
// // stuff.splice(1,1,"red", "green");
// // console.log(stuff);

// // stuff.splice(1,1,"grape","kiwi", "apple", "carrot");
// // console.log(stuff);

// // stuff.splice(2,1);
// // console.log(stuff);

// // // SLICE METHOD (NON DISRUPTIVE)
// // stuff.slice(4);
// // var removed=stuff.slice(4);
// // console.log(removed);

// // /* 
// // 1. create an array of 5 movies
// // 2. at the beginning of the array, add a "die hard"
// // 3. Remove the 3rd and 4th movies, and in their place put "godfather I", 'godfather II, "godfather III"
// // 4. add "guardians of the galexy to the end"
// // 5. Duplicate index 1-3 into a new array.
// // 6. Remove the first movie.
// // 7. console the second to the last movie 

// // bonus 8. delete everthing and add jurassic park

// // */

// // var movies = ["HP1","HP2","HP3","HP4","HP5"];
// // console.log(movies[1]);
// // console.log(movies.length);

// // movies.unshift("Die Hard");
// // console.log(movies);

// // movies.push("Guardians of the galaxy");
// // console.log(movies);

// // var removedmovies=movies.pop();
// // console.log(movies);


// /**
//  * IF ELSE IF ELSE
//  */
// function getuserage(){
//     var userage = parseInt(prompt('how old are you'));
//     if(userage>=21){
//         console.log(userage);
//     }else if(userage==21){
//         console.log('not old enough');
//     }else{
//         console.log('plenty old');
//     }
// }
// getuserage();

//write a function and prompt the user telling the user a story asking for 1 of 3 choices 
//each choice continues to their own function
//wash rinse repeate thrise more
//SIMPLE VERSION
//alerts, prompts, confirms
// if/ else if / else

//COMPLEX VERSION
//loops 
//arrays


//var story=["An old lady lived in a shoe"];
//console.log(story);

  // var story = prompt('An old lady lived in a shoe');
    // if(story=='ok'){
    //     console.log('it smelled like feet');
    // }else if(story=='no'){
    //     console.log('it didnt smell bad');
    // }else{
    //     console.log('she wasnt happy');
    // }


// for(var i = 0; i < spans.length; i++){
//     switch(spans[i].className){
//         case '':
//             spans[i].textContent=''[getrandumnum(''.length)];
//             break;
//         default:
//     }
// }

// function getrandumnum(num){
//     return Math.floor(Math.random() * num);
// }
