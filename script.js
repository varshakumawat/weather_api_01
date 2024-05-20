const cityInput = document.querySelector("#cityInput");
const weatherBox = document.querySelector("#weather-box");

cityInput.addEventListener(
    "keyup",
    async function (event) {
        if (event.key == "Enter") {
            const cityName = event.target.value;
            if (cityName == ""){
                cityInput.focus();
                return;
            }
            weatherBox.innerHTML = `<div class="loader mb-4">
            <i class="fas fa-spinner fa-spin fa-2x"></i>
         </div>`;
            cityInput.disabled =true;
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`;

            const response = await fetch(API);
            cityInput.disabled = false;
            if (response.status == 200) {
                const data = await response.json();
                
                weatherBox.innerHTML = ` <div class="weather-icon mb-4">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                                           
                    </div>
                    <div class="weather-info mb-4">
                        <h2 class="mb-3">${cityName}</h2>
                        <p>Min Temperature: ${data.main.temp_min} °C</p>
                        <p>Max Temperature: ${data.main.temp_max} °C</p>
                        <p> Temperature: ${data.main.temp} °C</p>
                        <p>Condition: ${data.weather[0].main}</p>
                        <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} </p> 
                        <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()} </p> 
                    </div> `
            }
            else if (response.status == 404) {

              weatherBox.innerHTML = `City Not Found`

            }
        }
    }


)


// cityInput.addEventListener(
//     "keyup",
//     async function (event) {
//         if (event.key == "Enter") {
//             const cityName = event.target.value;
//             if (cityName == "") {
//                 cityInput.focus();
//                 return;
//             }
//             weatherBox.innerHTML = `<div class="loader mb-4">
//                             <i class="fas fa-spinner fa-spin fa-2x"></i>
//                          </div>`;
//             cityInput.disabled = true;
//             const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`;

//             const response = await fetch(API);
//             cityInput.disabled = false;
//             if (response.status == 200) {
//                 const data = await response.json();
//                 weatherBox.innerHTML = `
//                         <div class="weather-icon mb-4">
//                             <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
//                         </div>
//                         <div class="weather-info mb-4">
//                             <h2 class="mb-3">${cityName}</h2>
//                             <div class="row">
//                                 <div class="col-6">
//                                     <p>Temperature: ${data.main.temp} °C</p>
//                                     <p>Min Temperature: ${data.main.temp_min} °C</p>
//                                     <p>Min Temperature: ${data.main.temp_min} °C</p>
//                                     <p>Min Temperature: ${data.main.temp_min} °C</p>
//                                 </div>
//                                 <div class="col-6">
//                                     <p>Condition: ${data.weather[0].main}</p>
//                                     <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} </p> 
//                                     <p>Sunrise: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()} </p> 
//                                 </div>
//                             </div>
//                         </div>
//                     `;
//             } else if (response.status == 404) {
//                 weatherBox.innerHTML = `<h1> City Not Found </h1> `;
//             }

//         }
//     }
// )

// cityInput.addEventListener(
//     "keyup",
//  async   function (event) {
//         if (event.key == "Enter"){
//             const cityName = event.target.value;
//             const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`;
//             const response  = await fetch (API);
//             if (response.status ==200){
//                 const data = await response.json();
//                 console.log(data);
//                 weatherBox.innerHTML = `
//                   <div class="weather-icon mb-4">
//                 <i class="fas fa-sun fa-5x"></i>
//             </div>
//             <div class="weather-info mb-4">
//                 <h2 class="mb-3">${cityName}</h2>
//                 <p>Temperature: ${data.main.temp} °C</p>
//                 <p>Condition: Sunny</p>
//             </div>`;
//             }
//             else if(response.status ==404){
//                 console.log ('city not found')
//             }
//         }
//     }
// )