import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [temp, setTemp] = useState({ onload: false });

  function showWeather(response) {
    setTemp({
      onload: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "42d452330bfdae27782fbf2b6fe4218a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function submit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (temp.onload) {
    return (
      <div className="WeatherSearch">
        <form onSubmit={submit}>
          <input
            type="search"
            placeholder="enter a city..."
            className="form-search"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="button" />
        </form>
        <WeatherInfo info={temp} />
      </div>
    );
  } else {
    search();
    return "coming soon";
  }
}
