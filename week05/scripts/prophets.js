const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.getElementById('cards');

async function getProphetData () {
    const response = await fetch(url);        // tests
    const data = await response.json();       // console.log(data);
                                              // console.table(data.prophets);
    displayProphets(data.prophets);
}

// funtions for the main program              // array = date.prophets
const displayProphets = (array) => {          // items = the prophets data
    
    array.forEach(items => {        
        
        const section = document.createElement("section");   // I did not see the card sejestion
        const fullName = document.createElement("h2");       // `${items.name} ${items.lastname}`
        const portrait = document.createElement("img");      // items.imageurl
        
        fullName.innerText = `${items.name} ${items.lastname}`;
        portrait.setAttribute("src", items.imageurl);
        portrait.setAttribute("alt", `The portrait of ${items.name} ${items.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width","400");
        portrait.setAttribute("height","500");

        section.appendChild(fullName);
        section.appendChild(portrait);
        cards.appendChild(section);
    });
}




// to activate the main programe
getProphetData();