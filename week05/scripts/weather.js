const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');  // 49.74907668444966, 6.637014273226901 

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=7d8f40038117acf74e125c51aa2baf00';

async function apiFetch() {
 try{
    const response = await fetch(url);
    if (response.ok) {

        const data = await response.json();
        console.log(data);
        console.table(data);
        displayResults(data);

    } else {throw Error(await response.text());}
    } catch(err) {console.log(err);}
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.alt = 'an expreshon of the weather'; // could not get setAttribute() to work
    captionDesc.textContent = `${desc}`;
  }

apiFetch();