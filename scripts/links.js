const baseURL = "https://ganon3.github.io/WDD230/";
const linksURL = "https://ganon3.github.io/WDD230/data/links.json";



async function Main(link) { try {                             // this is the main funtion to work with the Json
    
                     const rawData = await fetch(link);       // this is the relm of tests
    if(rawData.ok) { const data = await rawData.json();       console.table(data); 




} else {throw Error ("There was a probelm with the links.js")}
} catch (err) {alert(err)}
}

Main(linksURL);