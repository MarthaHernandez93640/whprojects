function welcome(){
    var username=prompt("what is your name?");
    document.getElementById('welcome').innerHTML=username;
}
welcome();
// function fireworks(){
//     document.getElementById('h1').style.backgroundImage="url('/img/fireworks.jpg')";
//     document.getElementById('h1').style.color=("white");
//     togglecolor();
// }

function togglecolor(){
    document.body.classList.toggle('colorize');

}
function myfunction(){
    document.getElementById("mymouse").style.cursor = "pointer";
}