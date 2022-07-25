
weatherLink = document.getElementById("#weather");
//console.log ("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={3da63184704762e74a9d5e213f99d400}");

function getApi() {

     //ApiUrl
    var urlRequest = "https://api.openweathermap.org/data/2.5/onecall?lat={35.61}&lon={83.55}&appid={d12707350df08c4703683ba822b2a53b}";

    fetch(urlRequest).then(function(response) {
        console.log(response);
        //request response
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
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
            })
        }
    })
}
getApiTwo();