document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `This was last modifide: ${new Date(document.lastModified)}`;

const buttons = document.getElementById("buttons");
const setbutton = document.getElementById("setings");
const navi = document.getElementById("navigation");

setbutton.addEventListener('click', ()=> {

    if (setbutton.textContent == "X") {setbutton.textContent = "≡";}
    else {setbutton.textContent = "X";}

    setbutton.classList.toggle('seting');
    navi.classList.toggle('seting');
    buttons.classList.toggle('seting'); 
})

// up top is footer stuff and hamberger menue button
// -------------------------------------------------

function setDate(verryFirst) {localStorage.setItem('veryFirst', verryFirst);}
function getDate() {return localStorage.getItem('veryFirst');}

let verryFirst = getDate() || new Date(); // this is the date of the very first time the user hase visteted
setDate(verryFirst);                      // you will never need this again

function setLast(lastVisited) {localStorage.setItem('LastViseted', lastVisited);}
function getLast() {return localStorage.getItem('LastViseted');}

let lastV = getLast();       // this is the last viset
let nowV = new Date();       // user is vistening now
setLast(nowV);               // set last viset to now

const greating = document.getElementById('great');
if ((new Date(nowV) - new Date(verryFirst)) < 86400000)     { greating.textContent = "Welcome! Let us know if you have any questions."}
else if ((new Date(nowV) - new Date(lastV)) < 86400000) { greating.textContent = "Back so soon! Awesome!"}
else if ((new Date(nowV) - new Date(lastV)) >= 86400000) {

    let msOfdays = new Date(nowV) - new Date(lastV);
    let days = Math.floor(msOfdays / 86400000);

    if (days == 1) {greating.textContent = `You last visited ${days} day ago.`}
    else {greating.textContent =`You last visited ${days} days ago.`}
}


        
/*
const set = setTimeout(setDate(verryFirst), 5000);
console.log(set);
console.log(Date.now() - new Date('05/13/2024'));  //tests
console.log(new Date() / 31536000000)
console.log(Date.now() - new Date(lastViset))
*/


