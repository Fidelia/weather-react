import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [temp, setTemp] = useState({ onLoad: false });

  function showWeather(response) {
    setTemp({
      onLoad: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (temp.onLoad) {
    return (
      <div className="WeatherSearch">
        <form>
          <input
            type="search"
            placeholder="enter a city..."
            className="form-search"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>

        <div className="row">
          <div className="col-6">
            <h1>{temp.city}</h1>
            <ul>
              <li>Wed 12:00</li>
              <li className="text-capitalize"> {temp.description} </li>
              <li>
                {" "}
                <img src={temp.icon} alt="" />
              </li>
            </ul>
          </div>

          <div className="col-6">
            <h2> {Math.round(temp.temperature)} °C</h2>
            <ul>
              <li>Humidity:{temp.humidity} %</li>
              <li>Wind: {temp.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "42d452330bfdae27782fbf2b6fe4218a";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    return "coming soon";
  }
}
