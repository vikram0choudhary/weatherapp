let weather ={
    apikey: "d19a54957da5a48ab7b3c676b61c6595",
    fetchWeather: function(city){
        fetch(
         "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            +"&units=metric&appid="
         + this.apikey
        )
          .then((Response) => Response.json())
          .then((data) => this.displayweather(data));
    },
  displayweather: function(data){
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity } = data.main;
    const{ speed} = data.wind;
    document.querySelector(".city").innerText = "weather in " +name;
    document.querySelector("img.icon").src = 
    "http://openweathermap.org/img/wn/"+ icon +".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp +"°C";
    document.querySelector(".humidity").innerText = "Humidity: "+ humidity +"%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h"
   document.querySelector(".weather").classList.remove("loading");
},
  search: function()
  {
   this.fetchWeather(document.querySelector(".search-bar").value);
  }
};
document.querySelector(".search button")
document.addEventListener("click",function() {
    weather.search();

});

document
 .querySelector(".search-bar")
 .addEventListener("keyup", function(evetn){
    if(evetn.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("mumbai");
