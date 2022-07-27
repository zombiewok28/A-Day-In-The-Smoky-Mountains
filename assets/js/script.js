
weatherLink = document.getElementById("weatherLink");
alertsLink = document.getElementById("alertsTag");
console.log ("https://api.openweathermap.org/data/2.5/onecall?lat=35.7143&lon=83.5102&appid=d12707350df08c4703683ba822b2a53b");

function getApi() {

     //ApiUrl
    var urlRequest = "https://api.openweathermap.org/data/2.5/onecall?lat=35.653194&lon=-83.50702&units=imperial&appid=d12707350df08c4703683ba822b2a53b";

    fetch(urlRequest).then(function(response) {
        console.log(response);
        
        //request response
        if(response.ok) {
            response.json().then(function(data1) {
                console.log(data1);


                
                for (let i = 0; i < 6; i++) {

                    // create and append
                    var div = document.createElement('div');
                    div.classList.add('card')
                    div.classList.add('column')
                    weatherLink.appendChild(div)

                    // temp
                    var pEl = document.createElement("p");
                    div.appendChild(pEl)
                    pEl.textContent = data1.daily[i].temp.day

                    // weather
                    var pEl2 = document.createElement("p");
                    div.appendChild(pEl2)
                    pEl2.textContent = data1.daily[0].weather[0].main

                    // Icon
                    var iconImg = document.createElement("img");
                    div.appendChild(iconImg)
                    iconImg.src = 'http://openweathermap.org/img/wn/10d@2x.png'
                
                }

                
            })
        }
    })
}
getApi();



function getApiTwo() {

    // Api Url
    var urlRequestTwo = "https://developer.nps.gov/api/v1/alerts?stateCode=NC&stateCode=TN&api_key=mBGn4CcseyYGFZxBpAU9GrVwE4YCxrhCtPngKKZ5";

    fetch(urlRequestTwo).then(function(response) {
        console.log(response);
        //request response
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);

                for (let i = 0; i < data.data.length; i++) {


                  // create and append
                var div2 = document.createElement("div")
                div2.classList.add('card')
                div2.classList.add('column')
                
                //alerts text appended
                var alertsPEl = document.createElement("p")
                div2.appendChild(alertsPEl)
                alertsPEl.textContent = data.data[i].description
                alertsLink.appendChild(div2)

                }

            })
        }
    })
}
getApiTwo();






