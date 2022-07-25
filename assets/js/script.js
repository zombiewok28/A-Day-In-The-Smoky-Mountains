
weatherLink = document.getElementById("#weather");
console.log ("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={3da63184704762e74a9d5e213f99d400}");

function getApi() {

    // Api Url
    var urlRequest = "https://api.openweathermap.org/data/2.5/onecall?lat={35.61}&lon={83.55}&appid={3da63184704762e74a9d5e213f99d400}";

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
    var urlRequestTwo = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=mBGn4CcseyYGFZxBpAU9GrVwE4YCxrhCtPngKKZ5";

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