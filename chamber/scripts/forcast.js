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
const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=29.30&lon=-94.80&units=imperial&cnt=23&appid=7d8f40038117acf74e125c51aa2baf00";

async function getJson (url) { try {

    const rawData = await fetch(url);
    if (rawData.ok) 
    {
    const data = await rawData.json();
    console.table(data);
    return data; 
    }
    
else {throw Error ("There is a probelm with the url")} 
} catch(err) {alert(err)}}

function displayTest (array) {

    console.table(array);
    array.forEach(i => console.log(i));
    array.forEach(i => console.log("hi"));

}
/// dispalayer 

const section = document.getElementById("homeMainWF");

function displayWeather(json) {

    
}
function displayForcast(json) {}


async function Main() {

    const weather = await getJson(weatherURL);
    const forcast = await getJson(forcastURL);
    
    displayWeather(weather);
    displayForcast(forcast);
}

Main();
// to start thinsg