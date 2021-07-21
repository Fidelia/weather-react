import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [onload, setOnload] = useState(false);
  const [temp, setTemp] = useState({});

  function showWeather(response) {
    setOnload(true);
    console.log(response.data);
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

  let openSource = (
    <small>
      <a
        href=" https://github.com/Fidelia/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by Fidelia Okandze
    </small>
  );

  if (onload) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(temp.temperature)} °C</li>
          <li>Humidity: {temp.humidity}%</li>
          <li>Wind: {Math.round(temp.wind)} km/h</li>
          <li> Description: {temp.description}</li>
          <li>
            {" "}
            <img src={temp.icon} alt={temp.description} />
          </li>
        </ul>
        {openSource}
      </div>
    );
  } else {
    return form;
  }
}
