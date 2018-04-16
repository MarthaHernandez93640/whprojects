var thedate=new Date();
console.log(thedate);
console.log(thedate.getDate());
console.log(thedate.getDay());
console.log(thedate.getFullYear());
console.log(thedate.getMonth());

console.log(thedate.getMonth.toLocaleDateString('en-us',{month:'long'}));

var mybday=newdate(2000, 10, 02);

var datestr=`
    today's date is $[thedate.getDate()]th of${thedate.toDateString('en-us',{month:'long'})}${thedate.getFullYear()}
        
`;

// document.body.textContent=mybday;
var stopbtn=document.querySelector('button');
stopbtn.addEventListener('click', function(){
    clearInterval(mytimer)
    
});

var bdaystr=`
${mybday.toLocaleDateString('en-us',{month:'2-digit'})}${mybday.toLocaleDateString('en-us',{day:'2-digt'})}${mybday.toLocaleDateString('en-us',{year:'2-digit'})}
`;

function updatetimer(){
    var thetime=newdate();
    var timestr=`
    ${thetime.toLocaleDateString('en-us',{hour:'numeric', hour12: false, minute: '2-digit'})}
    `;
}
document.querySelector('h3').textContent=timestr;