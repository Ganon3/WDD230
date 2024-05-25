const baseURL = "https://ganon3.github.io/WDD230/";
const linksURL = "https://ganon3.github.io/WDD230/data/links.json";

async function Main(link) { try { // this is the main funtion to work with the Json
    
                     const rawData = await fetch(link);  
    if(rawData.ok) { const data = await rawData.json();       // console.log(data);   
        
    // displayTest(data.weeks);
    display(data.weeks);
        
} else {throw Error ("There was a probelm with the links.js")}
} catch (err) {alert(err)}}

// testing stuff
// testing  --------
function displayTest (array) {

    array.forEach(i => console.log(i));
    array.forEach(i => console.log("hi"));
    array.forEach(i => console.log(i.week));
    array.forEach(i => console.log(i.links));
    array.forEach(i => console.log(i.links[0]));
}

// funtion display
// display ---------
const links1 = document.getElementById("links");

function display (array) { array.forEach(week => {
    
    const li = document.createElement("li");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");

            h3.innerHTML = week.week;
            li.appendChild(h3);

    week.links.forEach(i => {

        const a = document.createElement("a");
        a.href = i.url;
        a.innerHTML = i.title
        div.appendChild(a);

    })

    li.appendChild(div);
    links1.appendChild(li);

});}

// to activate the program
Main(linksURL);