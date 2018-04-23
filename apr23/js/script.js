// var storagebtn1=document.querySelector('#btn1');
// var storagebtn2=document.querySelector('#btn2');

// storagebtn1.addEventListener('click', setlocalstorage);
// storagebtn2.addEventListener('click', setsessionstorage);


// function setlocalstorage(){
//     localStorage.setItem('firstname','Martha');
// }
// function setsessionstorage(){
//     sessionStorage.setItem('vehicle','mazda');
// }

var savebtn=document.querySelector('input[type="submit"]');
if(localStorage.getItem("details",) !==null){
    savebtn.addEventListener('click', getuserinfo);
    savebtn.addEventListener('click', checkpassword)
}else{
    savebtn.addEventListener('click', checkpassword);
    savebtn.addEventListener('click', getuserinfo);
}


function getuserinfo(evt){
    evt.preventDefault();

    var radio= document.querySelector('input[type="radio"]:checked').value;
    var username = document.querySelector('input[type="text"]').value;
    var password = MD5(document.querySelector('input[type="password"]').value);

    localStorage.setItem("details",JSON.stringify(new userinfo(username, password)) );

}

function userinfo(un, pw, theme){
    this.user=un;
    this.pass=pw;
    this.theme=theme;
}

function checkuserinfo(){
    if(localStorage.getItem("details") !==null){
        document.querySelector('label[for="theme"]').style.display='none';

        var userinfo = JSON.parse(localStorage.getItem("details"));
        document.querySelector('input[type="text"]').value = userinfo.user;
    }
}
checkuserinfo();

function checkpassword(evt){
    var username = document.querySelector('input[type="text"]').value;
    var userpass = MD5(document.querySelector('input[type="password"]').value);
    var userinfo = JSON.parse(localStorage.getItem("details"));
    if( username === userinfo.user && userpass===userinfo.pass){
        alert('welcome home!');
        document.body.classList.add(userinfo.theme);
    }else{
        alert('please enter a proper password');
    }
}