const url = "https://ganon3.github.io/WDD230/chamber/data/members.json";
const div = document.getElementById("memberCards");

async function Main (url) { try {

    const rawData = await fetch(url);

    if (!rawData.ok) {throw Error ("There is a probelm with the url")}
    else if (rawData.ok) {

    const data = await rawData.json();
    //displayTest(data.members);
    displayFull(data.members);


    }
} catch(err) {alert(err)}}

function displayTest (array) {

    console.table(array);
    array.forEach(i => console.log(i));
    array.forEach(i => console.log("hi"));
    array.forEach(i => console.log(i.name));

}

// displayFull
// displayLittle

const divCard = document.getElementById("memberCards");

function displayFull (array) {

    array.forEach(memb => {

        const section = document.createElement("section");
        const img = document.createElement('img');
        const addres = document.createElement("p");
        const phone = document.createElement("p");
        const a = document.createElement("a");

        img.src = memb.icon;
        img.alt = "The company icon";
        addres.innerText = memb.addresse;
        phone.innerText = memb.phoneNumbers;
        a.href = memb.websightURL;
        a.innerText = memb.websightURL;

        section.appendChild(img);
        section.appendChild(addres);
        section.appendChild(phone);
        section.appendChild(a);

        divCard.appendChild(section);
    })

}

// to activate
Main(url);