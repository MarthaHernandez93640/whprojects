var navbtn=document.getElementById("navbtn");

// TARGET ELEMENT BY DECLARED VARIABLE
// navbtn.style.color="red";
// navbtn.style.fontSize="32px";

// EVENT LISTENER NEEDS 2 THINGS
// -WHAT EVENT (i.e. click, hover etc.)
// -WHAT FUNCTION TO RUN

navbtn.addEventListener("click", showNav);

function showNav(){
    navbtn.classList.toggle("active");
    nav.classlist.toggle("viewNav");
}
