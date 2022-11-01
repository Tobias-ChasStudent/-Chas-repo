//Get the cards div
const cards = document.querySelector(".cards")

//Store the API arguments
let apiKey = "401395c8bb11a6dde982bcf35f6812e4"
let lat = "59.32"
let long = "18.06"
let when = "current"

//Create array of city coords and their names
let cityCoords = [{
        name: "Stockholm",
        lat: "59.32",
        long: "18.06"
    },
    {
        name: "Paris",
        lat: "48.85",
        long: "2.35"
    },
    {
        name: "Kiev",
        lat: "50.45",
        long: "30.52"
    },
]

//Loop through each city coordinate
cityCoords.forEach(element => {
    //Store the url
    let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + element.lat + "&lon=" + element.long + "&exclude=" + when + "&appid=" + apiKey
    console.log(url);

    //Create a section
    let section = document.createElement("section");
    cards.appendChild(section)

    //Create and append the url
    /* let urlLink = document.createElement("a")
    urlLink.setAttribute("href", url)
    urlLink.setAttribute("target", "_blank")
    urlLink.textContent = "Link"
    section.appendChild(urlLink) */

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            //create the header
            let header = document.createElement("header")

            //get the name of the city
            let title = document.createElement("h2");
            title.textContent = element.name;
            header.appendChild(title);
            //console.log(title);

            //get the wind speed and direction
            let wind = document.createElement("div")
            wind.classList.add("wind")
            let windSpeed = document.createElement("p")
            windSpeed.textContent = data.wind.speed + "m/s"
            let windDegImg = document.createElement("img")
            windDegImg.setAttribute("src", "./img/arrow.png")
            wind.appendChild(windSpeed)
            wind.appendChild(windDegImg)
            header.appendChild(wind)
            section.appendChild(header)
            windDegImg.style.transform = "rotate("+data.wind.deg+"deg)"

            //get the temperature
            let temp = document.createElement("h4");
            let tempCel = Math.round((data.main.temp - 273.15) * 10) / 10;
            temp.textContent = tempCel + " °C";
            section.appendChild(temp)
            //console.log("temp:",tempCel);

            //get the icon
            let icon = document.createElement("img");
            let iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            icon.setAttribute("src", iconUrl);
            section.appendChild(icon);

            //get the description
            let desc = document.createElement("h3");
            desc.textContent = data.weather[0].description;
            section.appendChild(desc);

        })

});