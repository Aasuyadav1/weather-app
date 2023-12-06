
var countryname = 'mumbai'
let serchBTn = document.querySelector("#btn");
let serchValue = document.querySelector("#search");
serchBTn.addEventListener("click",()=>{
    if(serchValue.value === ""){
        alert("enter the location");
    }else{
        countryname = serchValue.value;
        console.log(countryname);
        apicalling();
    }
})
var image = document.querySelector("#weatherImg");
var bgImage = document.querySelector("#bg-img");

async function apicalling (){
    var keyApi = 'deea1ffc513fd0242a6774f8800867a1';
    var urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${countryname}&appid=${keyApi}&units=metric`;
    let response =  await fetch(urlApi);
   
    let data = await response.json();
    if(response.status == 404){
        // document.querySelector("#er").style.display = "block"
        alert("No location found !!!")
      }
    console.log(data)
    document.querySelector(".tempracture").innerHTML = Math.round(data.main.temp) +" " + "°C";
   
    document.querySelector(".location").innerHTML = data.name;
    document.querySelector("#humditiy").innerHTML = data.main.humidity +" " + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed +" " + "km/h";
    var wethImg = data.weather[0].main;
    console.log(`the main is = ${wethImg}`);

    if(wethImg === 'Haze'){
        image.src = "weather-app-img/images/clear.png";
        bgImage.src = "weather-app-img/images/weather.night.gif"
    }else if(wethImg === 'Clouds'){
        image.src = "weather-app-img/images/clouds.png";
        bgImage.src = "weather-app-img/images/weather.rain.gif"
    }else if(wethImg === 'Clear'){
        image.src = "weather-app-img/images/clear.png";
        bgImage.src = "weather-app-img/images/weather.night.gif"
    }else if(wethImg === 'Drizzle'){
        image.src = "weather-app-img/images/drizzle.png";
        bgImage.src = "weather-app-img/images/weather.rain.gif"
    }else if(wethImg === 'Mist'){
        image.src = "weather-app-img/images/mist.png";
        bgImage.src = "weather-app-img/images/weather.cloudy.gif"
    }
    else if(wethImg === 'Rain'){
        image.src = "weather-app-img/images/rain.png";
        bgImage.src = "weather-app-img/images/weather.rain.gif"
    }
    else if(wethImg === 'Snow'){
        image.src = "weather-app-img/images/snow.png";
        bgImage.src = "weather-app-img/images/weather.rain.gif"
    }else{
        image.src = "weather-app-img/images/clouds.png";
        bgImage.src = "weather-app-img/images/weather.night.gif"
    }
  
    // document.querySelector("#er").style.display = "none"
}

apicalling();
