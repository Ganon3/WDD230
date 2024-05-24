const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.getElementById('cards');

async function getProphetData () {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // console.table(data.prophets);
}

// funtions for the main program





// to activate the main programe
getProphetData();