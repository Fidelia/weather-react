import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.info.city}</h1>
          <ul>
            <li>
              <FormatDate date={props.info.date} />
            </li>
            <li className="text-capitalize"> {props.info.description} </li>
            <li>
              {" "}
              <div className="float-left">
                <WeatherIcon code={props.info.icon} />
              </div>
            </li>
          </ul>
        </div>

        <div className="col-6">
          <h2> {Math.round(props.info.temperature)} °C</h2>
          <ul>
            <li>Humidity:{props.info.humidity} %</li>
            <li>Wind: {props.info.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
