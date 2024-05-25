const baseURL = "https://ganon3.github.io/WDD230/";
const linksURL = "https://ganon3.github.io/WDD230/data/links.json";

async function Main(link) { try {                             // this is the main funtion to work with the Json
    
                     const rawData = await fetch(link);       // this is the relm of tests
    if(rawData.ok) { const data = await rawData.json();       
        
    console.table(data); 
    console.table(data.weeks);
    console.log(data.weeks|| "hellow")
    display(data);
        
} else {throw Error ("There was a probelm with the links.js")}
} catch (err) {alert(err)}}


// funtion display 
const links1 = document.getElementById("links");

function display (data) { data.weeks.forEach(week => {
    
    const li = document.createElement("li");
    const div = document.createElement("div");

    week.forEach(i => {
        if (week[0] == i) {
            const h3 = document.createElement("h3");
            h3.innerHTML = i.name;
            li.appendChild(h3);
        }
        else {
            const a = document.createElement("a");
            a.href = i.url;
            a.innerHTML = i.title
            div.appendChild(a);
        }
    })

    li.appendChild(div);
    links1.appendChild(li);

});}

// to activate the program
Main(linksURL);