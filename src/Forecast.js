import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="Forecast-day">Thu</div>
            <WeatherIcon code="01d" size={36} />
            <div className="Forecast-temperatures">
              <span className="Forecast-max">{forecast[0].temp.max}</span>
              <span className="Forecast-min">{forecast[0].temp.min}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "42d452330bfdae27782fbf2b6fe4218a";
    let longitude = props.lon;
    let latitude = props.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}
