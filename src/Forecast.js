import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function displayForecast(coordinates) {}
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiKey = "42d452330bfdae27782fbf2b6fe4218a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="Forecast-temperatures">
            <span className="Forecast-max">20</span>
            <span className="Forecast-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
