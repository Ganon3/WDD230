document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `This was last modifide: ${new Date(document.lastModified)}`;

const button = document.getElementById("button1")
const links = document.querySelectorAll(".link")

button.addEventListener("click", () => {

    //alert(links.length)
    
    if (button.textContent == "X") {button.textContent = "≡";}
    else {button.textContent = "X";}

    links.forEach((i) => {i.classList.toggle('men');});
    button.classList.toggle("men");
})

// ------- form section --------

const rangevalue = document.getElementById("r");
const range = document.getElementById("rr");

range.addEventListener('change', () => {rangevalue.innerHTML = range.value;});
range.addEventListener('input', () => {rangevalue.innerHTML = range.value;});

const pass = document.getElementById("p");
const passv = document.getElementById("pv");

passv.addEventListener("focusin",  () => {passv.placeholder = "Must Mach"; passv.style.backgroundColor = "#fff";})
passv.addEventListener("focusout", () => {

    if (pass.value !== passv.value) {
        passv.value="";
        pass.value="";
        passv.style.backgroundColor = "#fff0f3"; 
        passv.placeholder = "DOES NOT MATCH!!!";
        pass.focus();
    }
    else {passv.placeholder = ""; passv.style.backgroundColor = "#fff";}
})
