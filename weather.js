let searchBtn = document.querySelector("#search-btn")
let result = document.querySelector("#result")
let API_KEY = "30c7736a1814ed777cb3d565545845f2"

const getWeatherData = async ()=>{
    try{
        let cityName = document.querySelector("#city-name").value.trim();

        if(!cityName){
            result.innerHTML = `<p class="text-red-700 mt-4 font-semibold">Please Enter a City Name....</p>`
            return
        }

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
        console.log(response);
        
        if(!response.ok){
            result.innerHTML = `<p class="text-red-700 mt-4 font-semibold">City Not Found</p>`
            return
        }
        
        let data = await response.json();
        console.log(data);
        
        result.innerHTML = 
        ` <h1 class="text-xl font-bold mt-3 text-green-600">${data.name} , ${data.sys.country}</h1>
          <p class="text-green-600 font-semibold">Temperature : ${data.main.temp} °C</p>
          <p class="text-green-600 font-semibold">Wind speed : ${data.wind.speed} m/s</p>
        `
        

    }catch(error){
        console.log(error,"Error in Fetching Weather Details");
        
    }
}

searchBtn.addEventListener("click",getWeatherData)

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}