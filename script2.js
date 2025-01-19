
document.addEventListener('DOMContentLoaded', () => { 
    const searchBox = document.querySelector(".search input"); 
    const searchBtn = document.querySelector(".search button"); 
    console.log(searchBtn);
     // Should not be null
     
const weatherIcon=document.querySelector(".w-icon");
const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'a6526fa27bmsh216fcd72dbb67bep1be196jsna2b72f850c5b',
        'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
    }
};


async function cw(city) {
    try {

        const response = await fetch(url + city, options);
        const result = await response.json();
        console.log(result);
        console.log(result.main.temp);

        const kelvinToCelsius = (kelvin) => kelvin - 273.15; // Example usage 
        const kelvinTemp = result.main.temp; 
        const celsiusTemp = kelvinToCelsius(kelvinTemp)
        const temps=Math.round(celsiusTemp)
        console.log(celsiusTemp)
        document.querySelector(".city").innerHTML = result.name;
        document.querySelector(".humidity").innerHTML = result.main.humidity + "%";
        document.querySelector(".wind").innerHTML = result.wind.speed + " km/h";
        document.querySelector(".temp").innerHTML = temps + "c";

        if (result.weather[0].main =="Clouds"){
            weatherIcon.src="images/clouds.png"
        }
        else if (result.weather[0].main =="Rain"){
             weatherIcon.src="images/rain.png"
        }
        else if (result.weather[0].main =="Snow"){
             weatherIcon.src="images/snow.png"
        } 
        else if (result.weather[0].main =="Mist.png"){
             weatherIcon.src="images/mist.png"
        }
        else if (result.weather[0].main =="Drizzle.png"){
             weatherIcon.src="images/drizzle.png"
        }
        else if (result.weather[0].main =="Clear"){
             weatherIcon.src="images/clear.png"
        }
        
    } catch (error) {
        console.error(error);

    }

}

searchBtn.addEventListener("click", () => {
    cw(searchBox.value);
    console.log(searchBox.value)
    
})
});