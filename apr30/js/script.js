var age = prompt("what is your age?")

    if(age >= 13){
        console.log("play on!");
    }else{
        console.log("its ok you can still play");
    }
console.log("You are at a Godsmack concert, and you hear this lyric 'Now I've told you this once before, You can't control me. If you try to take me down you're gonna break, I feel your every nothing that you're doing for me.");

var userAnswer = prompt("Do you want to race Sully on stage?");

console.log("Suddenly, Sully stops and says, 'Who wants to race me?'");
    if(userAnswer=='yes'){
    console.log("You and Sully start racing. It's neck and neck! You win by a landslide!");
    }else if(userAnswer=='no'){
    console.log("Oh no! Sully shakes his head and sings 'I... stand alone! Inside... I stand alone!'");
    }else{
        console.log("'we hear crickets'")
    }

var feedback = prompt("Can you rate my game 1-10?");
    if( feedback > 8){
        console.log("Thank you! We should race at the next concert!")
    }else{
        console.log("Ok...I'll keep practicing coding and racing.")
    }