/* 
w3schools + others 

a day in MS = 86400000

for all display: https://www.w3schools.com/cssref/playdemo.php?filename=playcss_display ;

<script>
const time = new Date("2024-06-03 21:00:00").getTime(); // getDate(gives 1 to 31)
const day = new Date("2024-06-03 21:00:00").getTime();

document.getElementById("demo").innerHTML = `${time} and ${day + MS }`;
</script>

<script>
const points = [40, 100, 1, 5, 25, 10];

points.sort((a, b) => {return a - b});

SML = points[0];
BIG = points[points.length - 1];

document.getElementById("demo2").innerHTML = `${BIG} and ${SML}`;
</script>


for 3 days of forcast  https://api.openweathermap.org/data/2.5/forecast?lat=29.30&lon=-94.80&units=imperial&cnt=23&appid=7d8f40038117acf74e125c51aa2baf00";
for today weather      https://api.openweathermap.org/data/2.5/weather?lat=29.30&lon=-94.80&units=imperial&appid=7d8f40038117acf74e125c51aa2baf00";

The plan is to do the simpel things first : current temp and description EZ
then dig through teh forcast grab the min and max for the days and show them.
*/

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=29.30&lon=-94.80&units=imperial&appid=7d8f40038117acf74e125c51aa2baf00";
const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=29.30&lon=-94.80&units=imperial&cnt=26&appid=7d8f40038117acf74e125c51aa2baf00";

async function getJson (url) { try {

    const rawData = await fetch(url);
    if (rawData.ok) 
    {
    const data = await rawData.json();
    // console.table(data.weather);
    // comsole.table(data.list);
    return data; 
    }
    
else {throw Error ("There is a probelm with the url")} 
} catch(err) {alert(err)}}

function displayTest (array) {

    console.table(array);
    array.forEach(i => console.log(i));
    array.forEach(i => console.log("count"));

}

/// up is start
/// dispalayer 

const section = document.getElementById("homeMainWF");

function displayWeather(json) {

    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");

    img.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}.png`;
    img.alt = 'an expreshon of the weather';
    p.innerText = `${json.weather[0].main} or ${json.weather[0].description} is how it is right now in Galveston. Tempitures are looking to be around ${json.main.temp_min} to ${json.main.temp_max} degres in feranhight`;

    div.appendChild(img);
    div.appendChild(p);
    div.setAttribute("class","homeflex");
    section.appendChild(div);
}
function displayForcast(json) {

    let today = new Date().getTime();
    let day1 = {"temps":[], "day":`${new Date((today+(86400000*1)))}`};
    let day2 = {"temps":[], "day":`${new Date((today+(86400000*2)))}`};
    let day3 = {"temps":[], "day":`${new Date((today+(86400000*3)))}`};

    json.list.forEach(i => {
        if ((today+(86400000*3)) <= new Date(i.dt_txt).getTime()) {day3.temps.push(Number(i.main.temp))}
        else if ((today+(86400000*2)) <= new Date(i.dt_txt).getTime()) {day2.temps.push(Number(i.main.temp))}
        else if ((today+(86400000*1)) <= new Date(i.dt_txt).getTime()) {day1.temps.push(Number(i.main.temp))}
    });
    
    day1.temps = largeSmall(day1.temps);
    day2.temps = largeSmall(day2.temps);
    day3.temps = largeSmall(day3.temps);

    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerHTML = `On ${dateStringFix(day1.day)} the tempitures will raneg from ${day1.temps[0]} to ${day1.temps[1]} degreas`;
    p2.innerHTML = `On ${dateStringFix(day2.day)} the tempitures will raneg from ${day2.temps[0]} to ${day2.temps[1]} degreas`;
    p3.innerHTML = `On ${dateStringFix(day3.day)} the tempitures will raneg from ${day3.temps[0]} to ${day3.temps[1]} degreas`;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    section.appendChild(div);
}

// small funtions bellow
// small funtions bellow

function largeSmall(array) {

    array.sort((a, b) => {return a - b});

    SML = array[0];
    BIG = array[array.length - 1];
    
    return [SML,BIG];
}

// to start thinsg
async function Main() {

    const weather = await getJson(weatherURL);
    const forcast = await getJson(forcastURL);
    
    displayWeather(weather);
    displayForcast(forcast);
}

Main();
