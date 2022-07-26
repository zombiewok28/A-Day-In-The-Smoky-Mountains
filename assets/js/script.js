
weatherLink = document.getElementById("#weatherLink");
alertsLink = document.getElementById("#alertsTag")
console.log ("https://api.openweathermap.org/data/2.5/onecall?lat=35.7143&lon=83.5102&appid=d12707350df08c4703683ba822b2a53b");

function getApi() {

     //ApiUrl
    var urlRequest = "https://api.openweathermap.org/data/2.5/onecall?lat=35.7143&lon=83.5102&appid=d12707350df08c4703683ba822b2a53b";

    fetch(urlRequest).then(function(response) {
        console.log(response);
        //request response
        if(response.ok) {
            response.json().then(function(data1) {
                console.log(data1);
                if(weatherLink.clicked == true) {
                    weatherLink.innerHtml = data1;
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

                if(alertsTag.clicked == true) {
                    alertsTag.innerHtml = data;
                }
            })
        }
    })
}
getApiTwo();



function displayApis(data1, data){



}