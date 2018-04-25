var userstr = '';
function getusersearch(evt){
    console.log(searchbox.value);
    getreq(`https://api.github.com/search/users?q=${searchbox.value}&access_token=${clientid}`, githubusers);
    // if(
    //     evt.key !== 'undefined' &&
    //     evt.key !== 'backspace' &&
    //     evt.key !== 'tab'
    // )
    // str += evt.key;
    
    // console.log(str, searchbox.value);
}