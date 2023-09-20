
let weatherBtn = document.getElementById('weatherBtn')

let icon = document.getElementById('icon')
let text = document.getElementById('text')
let country = document.getElementById('country')
let latitude = document.getElementById('latitude')
let longitude = document.getElementById('longitude')
let local_time = document.getElementById('local-time')
let name = document.getElementById('name')
let region = document.getElementById('region')
let wind_direction = document.getElementById('wind-direction')
let temperature = document.getElementById('temperature')

weatherBtn.addEventListener('click', () => {
    let cityname = document.getElementById('cityname').value
    if(cityname == ''){
        alert('City Name is empty')

        icon.innerHTML = ''
        text.textContent = ''
        country.textContent = ''
        latitude.textContent = ''
        longitude.textContent = ''
        local_time.textContent = ''
        name.textContent = ''
        region.textContent = ''
        wind_direction.textContent = ''
        temperature.textContent = ''
    }
    else{
        fetch(`http://api.weatherapi.com/v1/current.json?key=1fadaa3b161f465384882631233107&q=${cityname}`)
        .then(response => {
           return response.json()
        })
        .then(data => {
            icon.innerHTML = `<img src=${data.current.condition.icon}>`
            text.textContent = data.current.condition.text
            country.textContent = 'Country: ' + data.location.country
            latitude.textContent = 'Latitude: ' + data.location.lat
            longitude.textContent = 'Longitude: ' + data.location.lon
            local_time.textContent = 'Local time: ' + data.location.localtime
            name.textContent = 'Name: ' + data.location.name
            region.textContent = 'Region: ' + data.location.region
            wind_direction.textContent = 'Wind direction: ' + data.current.wind_dir
            temperature.textContent = data.current.temp_c + ' degree celsius'
           console.log(data);
        })
        .catch(error => {
            console.error('error ' + error);
        })
    }
    cityname = ''
})

//CHANGING THEME TO DARK OR LIGHT
let bodyTag = document.getElementById('bodyTag')
let theme = document.getElementById('theme')

theme.addEventListener('click', () => {
    if(bodyTag.classList.toggle('newTheme')){
        theme.style.color = 'black'
        theme.textContent = 'Light'
        theme.style.backgroundColor = 'white'
    }else{
        theme.style.color = 'white'
        theme.textContent = 'Dark'
        theme.style.backgroundColor = 'black'
    }
    
})



// weatherBtn.addEventListener('click', () => {
//     fetch('http://api.weatherapi.com/v1/current.json?key=1fadaa3b161f465384882631233107&q=lagos')
//     .then(response => {
//        return response.json()
//     })
//     .then(data => {
//         icon.innerHTML = `<img src=${data.current.condition.icon}>`
//         text.textContent = data.current.condition.text
//         country.textContent = 'country: ' + data.location.country
//         latitude.textContent = 'latitude: ' + data.location.lat
//         longitude.textContent = 'longitude: ' + data.location.lon
//         local_time.textContent = 'local time: ' + data.location.localtime
//         name.textContent = 'Name: ' + data.location.name
//         region.textContent = 'Region: ' + data.location.region
//         wind_direction.textContent = 'Wind direction: ' + data.current.wind_dir
//         temperature.textContent = data.current.temp_c + ' degree celsius'
//        console.log(data);
//     })
// })










































// weatherBtn.addEventListener('click', () => {
//     fetch(`https://pro.openweathermap.org/data/2.5/forecast/climate?q=london&appid={7f8b7b587f5a5d368abe9ff967386f2b}`)
// .then( response => {
//     return response.json()
// })
// .then( data => {
//     console.log(data)
// })
// .catch(error => {
//     console.error('error' + error);
// })
// })

// fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={d64235f16d68ceb7d1eba5d039461151}')
// .then( response => {
//     return response.json()
// })
// .then( data => {
//     console.log(data)
// })
// .catch(error => {
//     console.error('error' + error);
// })


// fetch("http://api.openweathermap.org/geo/data/2.5/weather?q='+cityname+'&appid=d64235f16d68ceb7d1eba5d039461151")
// .then( response => {
//     return response.json()
// })
// .then( data => {
//     console.log(data)
// })
// .catch(error => {
//     console.error('error' + error);
// })
//nigeria 110001
//ogun 111103
//ogun

// "http://api.openweathermap.org/geo/data/2.5/weather?q='+cityname+'&appid=d64235f16d68ceb7d1eba5d039461151"

// fetch(`http://api.openweathermap.org/geo/data/2.5/weather?q=${cityname}&appid=d64235f16d68ceb7d1eba5d039461151`)
// .then( response => {
//     return response.json()
// })
// .then( data => {
//     console.log(data)
// })
// .catch(error => {
//     console.error('error' + error);
// })

// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '269f6f3282mshc8c5f5a0c32a49ep15b3f8jsn79b8322c98e1',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

//  "http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London"
//  1fadaa3b161f465384882631233107
