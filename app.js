const btn = document.querySelector("button")
const details = document.querySelector(".details")
const name = document.querySelector(".name")
const tempC = document.querySelector(".temp")
const desc = document.querySelector(".desc")
const iconHolder = document.querySelector(".icon")
const api ="9344e7e45e1b41ae92a0758c81fce0cf"

const input =document.querySelector("#query")

btn.addEventListener("click",(e) =>{
    e.preventDefault()
    const query =input.value;
    const url=
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        query
    )}&appid=${api}&units=metric`; 
    
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
    const temp =data.main.temp
    const place = data.name
    const {description,icon}=data.weather[0];
    const{speed} =data.wind
    const iconUrl =`http://openweathermap.org/img/wn/${icon}@2x.png`;
    tempC.textContent =`${temp}°C`
    name.textContent =`${place}`
    desc.textContent =`${speed}`
   iconHolder.src =iconUrl
   details.style.visibility ="visible"

    })
    .catch((err) => alert("Enter the valid address!"))
    input.value =""
})