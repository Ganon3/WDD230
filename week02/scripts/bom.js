const favchap = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', () => {

    if (favchap.value == "") {alert("The User must write something");}
    else {

        const chapt = document.createElement("li");
        const del = document.createElement('button');
        chapt.textContent = favchap.value;
        del.textContent = "❌"
        chapt.append(del);
        list.append(chapt);

        del.addEventListener('click', ()=> {
            list.removeChild(chapt);
            favchap.focus();
        })
    }

    favchap.focus();
    favchap.value = ""
    
})