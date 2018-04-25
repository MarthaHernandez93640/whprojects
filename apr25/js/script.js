var searchbox = document.querySelector('header input');
    searchbox.addEventListener('keypress', getusersearch)



var cardlist = document.querySelector('main ul');

function cardlistdata(cards){
    for(var i=0; i<cards.length; i++){
        var card = `
            <li>
            <img src="${cards.results[i].image}" alt="${cards.results[i].name}">
            <h3>${cards.results[i].name}</h3>
            </li>
        `;
        cardlist.innerHTML+= card;
    }
}


getreq('https://rickandmortyapi.com/api/character',cardlistdata);

function getcharacter(searchstr){
    var characterArr =[];
    // console.log(searchstr);

    var req = new XMLHttpRequest();
    req.open('get', 'https:rickandmortyapi.com/api/character');
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            var obj=JSON.parse(req.responseText).results;
                for(var i=0; i< obj.length; i++){
                    console.log(obj[i].name.includes(searchstr), obj[i].name);
                }
            }
        }
    }
    req.send(null);
    console.log(characterArr);

for(var i=0; i< characterArr.length; i++){
    if(searchstr===characterArr[i].name){
        console.log(
            searchstr,
            characterArr[i].name,
            'success'
        );
    }
}
