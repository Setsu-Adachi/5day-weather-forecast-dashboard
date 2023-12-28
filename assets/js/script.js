function getWeather() {
    var apiKey = "b4ef997851fea6ca0695dba1c14aab6d";
    var city = document.getElementById("city").value;

    fetch(currentWeatherUrl)
        .then(response => respon.json())
        .then(data => {
            displayWather(data);
        })
        .catch(error => {
            console.error("Error fetching current weather data:", error);
            alert("Error fetching current weather data. Please try again.");
        });

    fetch(forecastUrl)
        .then(response => respon.json())
        .then(data => {
            display5dayForecast(data.list);
        })
        .catch(error => {
            console.error("Error fetching 5 day forecast data:", error);
            alert("Error fetching 5 day forecast data. Please try again.");
        });

    var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    function displayWather(data) {
        var tempDivInfo = document.getElementById("temp-div");
        var weatherInfoDiv = document.getElementById("weather-info");
        var weatherIcon = document.getElementById("wheather-icon");
        var fiveDayForecastDiv = document.getElementById("fiveday-forecast");

        //clear previous content
        weatherInfoDiv.innerHTML = "";
        fiveDayForecastDiv.innerHTML = "";
        tempDivInfo.innerHTML = "";

        // * When a user views the current weather conditions for that city they are presented with:

        //   * The city name
        //   * The date
        //   * An icon representation of weather conditions
        //   * The temperature
        //   * The humidity
        //   * The wind speed

        if (data.cod === "404") {
            weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
        } else {

            var cityName = city.name;
            var date = list.dt_txt;
            var temperature = list.main.temp;
            var humidity = list.main.humidity;
            var windSpeed = list.wind.speed;
            var iconCode = list.weather[0].icon;
            var iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;


            // var temperatureHTML = <p>${temperature}°C</p>;
            // var weatherHTML = <p>${cityName}</p>, <p>${date}</p>;

            weatherInfoDiv.innerHTML = weatherHTML;
            tempDivInfo.innerHTML = temperatureHTML;
            weatherIcon.src = iconUrl;

            showImage();
        }


    }
    function display5dayForecast(fivedayData) {
        var fiveDayForecastDiv = document.getElementById("fiveday-forecast")
        var next5Day = fivedayData.slice(0, 5);

        next5Day.forEach(item => {
            var date = date;
            var temperature =
            // var weatherInfoDiv = icon;
            var iconUrl = `https://openweathermap.org/img/wn${iconCode}.png`;

            var fiveDayItemHTML = `
            <div class="fiveday-item">
            <span>${date}</span>
            <img src="${iconUrl}" alt="5 Day Weather Icon">
            <span>${temperature}°C</span>
            </div>`;

            fiveDayForecastDiv.innerHTML += fiveDayItemHTML
        })
    }
    
    function showImage() {
        
        var weatherIcon = document.getElementById("weather-icon");
        weatherIcon.style.display = "block";
        
    }
}

// Openweather APIkey b4ef997851fea6ca0695dba1c14aab6d

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={b4ef997851fea6ca0695dba1c14aab6d}

// console.log(dayjs());

// //Day.js how to pull the dates
// var events = document.querySelectorAll(".event");
// events.forEach( event => {
//     var date = dayjs(event.dataset.date).format("ddd D MMM, h:mm A")
//     var dateElement = event.querySelector(".date");
//     dateElement.innerText = date;

// })


// Create a weather dashboard with form inputs.


// * When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history


// * When a user views the current weather conditions for that city they are presented with:

//   * The city name
//   * The date
//   * An icon representation of weather conditions
//   * The temperature
//   * The humidity
//   * The wind speed

// * When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:

//   * The date
//   * An icon representation of weather conditions
//   * The temperature
//   * The humidity

// * When a user click on a city in the search history they are again presented with current and future conditions for that city
