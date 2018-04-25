function githubusers(data){
    console.log(data);
}

function getreq(url, func){
    var req = new XMLHttpRequest();
    req.open('get', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
            console.log(JSON.parse(req.responseText));
        }else{
            console.log('error', req.statusText);
        }
    }
    req.send(null);
}

function user(){
    console.log(searchbox.value);
    getreq('https://api.github.com/search/users?q=${searchbox.value}&client_id${}')
}