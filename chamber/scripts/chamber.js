document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `This was last modifide: ${new Date(document.lastModified)}`;

const buttons = document.getElementById("buttons");
const setbutton = document.getElementById("setings");
const navi = document.getElementById("navigation");

setbutton.addEventListener('click', ()=> {

    if (setbutton.textContent == "<=") {setbutton.textContent = "≡";}
    else {setbutton.textContent = "<=";}

    setbutton.classList.toggle('seting');
    navi.classList.toggle('seting');
    buttons.classList.toggle('seting');

})