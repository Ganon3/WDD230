const favchap = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapt => {displayList(chapt);})  

button.addEventListener('click', () => {

    if (favchap.value == "") {alert("The User must write something");}
    else {

        displayList(favchap.value);
        chaptersArray.push(favchap.value);
        setChapterList();
        
        favchap.focus();
        favchap.value = ""

    }  
})

const displayList = (item) => {

    const chapt = document.createElement("li");
    const del = document.createElement('button');
    chapt.textContent = item;
    del.textContent = "❌";
    chapt.append(del);
    list.append(chapt);

    del.addEventListener('click', ()=> {
        list.removeChild(chapt);
        favchap.focus();
    })
}

function setChapterList() {localStorage.setItem('favoretBOMchapts', JSON.stringify(chaptersArray));}
function getChapterList() {return JSON.parse(localStorage.getItem('favoretBOMchapts'))}
function deleteChapter(chapter) {

    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}