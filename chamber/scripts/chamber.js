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

function setDate() {localStorage.setItem('dateLastVisited', new Date());}
function getDate() {return localStorage.getItem('dateLastVisited');}

function setFirst(first) {localStorage.setItem('first', first);}
function getFirst() {return localStorage.getItem('first');}

let first = getFirst() || new Date();
const lastViset = getDate();           // 86400000 is 1 day in ms

if ((Date.now() - new Date(first)) < 86400000) { document.getElementById('great').textContent = "Welcome! Let us know if you have any questions."}
else if ((Date.now() - new Date(lastViset)) < 86400000) {document.getElementById('great').textContent = "Back so soon! Awesome!"}
else if ((Date.now() - new Date(lastViset)) >= 86400000) {

    let msOfdays = Date.now() - new Date(lastViset);
    let days = Math.floor(msOfdays / 86400000);

    if (days == 1) {document.getElementById('great').textContent = `You last visited ${days} day ago.`}
    else {document.getElementById('great').textContent =`You last visited ${days} days ago.`}
    
}

setFirst(first);
setDate();        // const set = setTimeout(setDate(), 5000);

//console.log(Date.now() - new Date('05/13/2024'));  tests
//console.log(new Date() / 31536000000)
//console.log(Date.now() - new Date(lastViset))


