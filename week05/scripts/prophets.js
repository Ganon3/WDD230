const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.getElementById('cards');

async function getProphetData () {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    console.table(data);
}

getProphetData();