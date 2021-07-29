import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
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
