let searchInputEle = document.getElementById('search-input');
let tempEle = document.getElementById('temp-value');
let locEle = document.getElementById('location');
let weatherDescEle = document.getElementById('weather-desc');
let btnEle = document.getElementById('btn');

const apikey = '8f4485f5f505ef4d2ad72e90b213a15f';

btnEle.onclick = function(){
    if(searchInputEle.value ==="")
        alert('Please Enter some Location')
    else{
        loc = searchInputEle.value
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        fetch(url).then(response => response.json())
        .then(data => {
            console.log(data)
            const{name} = data
            const{humidity} = data.main
            const{description} = data.weather[0]
            tempEle.innerText = humidity;
            locEle.innerText = name;
            weatherDescEle.innerText = description;
        })
        .catch(()=>{
          alert('Enter a vaild location')
        })
        searchInputEle.value =""
    }
}
