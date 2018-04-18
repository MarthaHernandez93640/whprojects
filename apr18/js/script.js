// var paras = document.querySelectorAll('p');

// // paras.classList.contains(‘classname’);

// // ! == not
// /*
// for(var i = 0; i < paras.length; i++){
//    // console.log(paras[i].classList.contains(‘para’));
//    if(!paras[i].classList.contains(‘para’)){
//        console.log(‘thats true’);
//    }else{
//        console.log(‘thats not true’);
//    }
// }
// */

// console.log(3 === '3');

// console.log(typeof(3));
// console.log(typeof('3'));

// // == lose comparison
// // === script comparison

// var usernum = parseInt(prompt('pick a number'));

// if(!usernum){
//    console.log(3 + usernum);
// }else{
//    console.log('please enter something');
// }

// XMLHttpRequest
// var weatherKey='1007a0e404aeb5ef9710ffa420b7c5b7';

var myUl=document.querySelector('ul');
console.log(new XMLHttpRequest());
var req=new XMLHttpRequest();
req.open('get', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1007a0e404aeb5ef9710ffa420b7c5b7');
req.onload=function(){
    if(req.readyState===4){
        var apiData=JSON.parse(req.responseText);
        console.log(apiData.emojis_url);
        processData(apiData);
    }
}
req.send(null);
// console.log(req.responseText);

function processData(data){
    for(var i=0; i<data.list.length; i++){
        var timeofday=data.list[i].dt;
        var Myli=`
        <li>
            <p>${timeofday}</p>
        </li>
        `;
        myUl.innerHTML+=Myli;
    }
}