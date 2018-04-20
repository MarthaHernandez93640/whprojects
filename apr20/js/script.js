var characterUl=document.querySelector('ul');
var homeurl='https://rickandmortyapi.com/api/character/';

function getreq(url, func){
    var req= new XMLHttpRequest();
    req.open('get', url);
    req.onload=function(){
        if(req.readyState===4 && req.status===200){
            console.log('success!', req.statusText);
            func(JSON.parse(req.responseText));
            getcharacter(req.responseText);
        }else{
            console.log('error', req.statusText);
        }
    }
    req.send(null);
}
$.ajax({
    url:'https://rickandmortyapi.com/api/character/',
}).done(getcharacters);

getreq(homeurl, getcharacters);

var characterurl;

$('body>ul').on('click', 'li', function(evt){
    if(this.dataset.url){
        characterurl=this.dataset.url;
        characterUl.innerHTML='';
        getreq(characterurl, getcharacter);
    }
});
function getcharacter(character){
    console.log(character);
}

characterUl.addEventListener('click', function(evt){
    console.log(this);
    console.log(evt);
});
console.log(characterUl);

function getcharacters(characters){
    var characterArr=characters;
    for(var i=0; i<characterArr.results.length; i++){
    var character=`
        <li data-url="${characterArr.results[i].url}">
            <img src="${characterArr.results[i].image}" alt="${characterArr.results[i].image}"
            <div>
                <h3>${characterArr.results[i].name}</h3>
                <ul>
                    <li><b>gender:</b>[${characterArr.results[i].gender}]</li>
                    <li><b>species:</b>[${characterArr.results[i].species}]</li>`;
    if(!characterArr.results[i].type==""){
        character+=`<li><b>type:</b>[${characterArr.results[i].type}]</li>`;
    }
    character+=`
                    <li><b>status:</b>[${characterArr.results[i].status}]</li>
                </ul>
            </div>
        </li>
    `;
            characterUl.innerHTML+=character;
    }
}
