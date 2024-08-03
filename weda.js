// const apiKey = "289e0bb542201554362c362e79009fa6";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=uyo"
//      // search bar
// const search = document.querySelector(".search input")
// const searchButt = document.querySelector(".search button")
 

// const weatherFunc = async (city) => {
//     const response = await fetch(apiUrl  + city + `&appid=${apiKey}`)
//     const data = await response.json()

//     console.log(data)

//     const cityName = document.querySelector("h3").innerHTML = data.name;
//     const tempInCel = document.querySelector("h2").innerHTML = Math.round(data.main.temp) + "°C";
//     const humidity = document.querySelector("#hum").innerHTML = data.main.humidity + "%";
//     const speed = document.querySelector("#spd").innerHTML = data.wind.speed +"km/hr";

 
// }
// // weatherFunc()
// searchButt.addEventListener("click", () => {
//     weatherFunc(searchButt.value)
//   })

const apiKey = "289e0bb542201554362c362e79009fa6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// search bar
const search = document.querySelector(".search input");
const searchButt = document.querySelector(".search button");

const weatherFunc = async (city) => {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        
        // Update HTML with the fetched data
        document.querySelector("h3").innerHTML = data.name;
        document.querySelector("h2").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#hum").innerHTML = data.main.humidity + "%";
        document.querySelector("#spd").innerHTML = data.wind.speed + " km/hr";
    } catch (error) {
        console.error(error);
        // Optionally, show an error message to the user
        document.querySelector("h3").innerHTML = "Error: " + error.message;
    }
}

searchButt.addEventListener("click", () => {
    const city = search.value;
    if (city) {
        weatherFunc(city);
    } else {
        console.error("City name cannot be empty");
    }
});







