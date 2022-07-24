


function getApi() {

    // Api Url
    var urlRequest = "https://api.openweathermap.org/data/2.5/onecall?lat={35.61}&lon={83.55}&exclude={part}&appid={d12707350df08c4703683ba822b2a53b";

    fetch(urlRequest)
    .then(function(response) {
        return response.json();
    })
.then(function(data) {
    console.log(data);
})
    }

