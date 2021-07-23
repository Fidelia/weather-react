import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [onload, setOnload] = useState(false);
  const [temp, setTemp] = useState({});

  function showWeather(response) {
    setOnload(true);
    setTemp({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function submit(event) {
    event.preventDefault();
    let apiKey = "42d452330bfdae27782fbf2b6fe4218a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={submit}>
      <input
        type="search"
        placeholder="enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

 if (onload) {
  return (
    <div className="WeatherSearch">
      {form}
      <div className="row">
        <div className="col-6">
          <h1>{city}</h1>
          <ul>
            <li> Mon 12th Jul 2021 17:00</li>
            <li> {temp.description}</li>
            <li>
              {" "}
              <img src={temp.icon} alt={temp.description} />
            </li>
          </ul>
        </div>

        <div className="col-6">
          <h2>{Math.round(temp.temperature)} °C</h2>
          <ul>
            <li>Humidity: {temp.humidity}%</li>
            <li>Wind: {Math.round(temp.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
   } else {
    return form;
  }
}
