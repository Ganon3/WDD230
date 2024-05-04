document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `This was last modifide: ${new Date(document.lastModified)}`;


const button = document.getElementById("button1")
const links = document.querySelectorAll(".link")

button.addEventListener("click", () => {

    //alert(links.length)
    
    if (button.textContent == "X") {button.textContent = "≡";}
    else {button.textContent = "X";}

    links.forEach((i) => {i.classList.toggle('men');});
    
})