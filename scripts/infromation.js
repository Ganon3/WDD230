// 29.35, -95.01 --  Hitchcock TX
const url = "https://api.openweathermap.org/data/2.5/weather?lat=29.35&lon=-95.01&units=imperial&appid=7d8f40038117acf74e125c51aa2baf00";
const divImg = document.getElementById("informImg"); 
const p = document.getElementById("informP");

const visits = document.getElementById("informCount");

async function Main(url) {
    const rawData = await fetch(url);
    if(!rawData.ok){alert("something is wrong")}
    else {

        const data = await rawData.json();
        console.log(data);

        divImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        divImg.alt = 'an expreshon of the weather';
        p.innerHTML = `It is looking like ${data.weather[0].description} right now. The tempiture is ${data.main.temp} degreas farinhit `;

        if(localStorage.count) {localStorage.count = Number(localStorage.count)+1;} //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_localstorage2
        else {localStorage.count = 1;}

        visits.innerHTML = `You have Visited ${localStorage.count} times`;
    }
}

// to actvate

Main(url);
