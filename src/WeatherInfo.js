import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="info">
            <h1>{props.info.city}</h1>
            <ul>
              <li>
                <FormatDate date={props.info.date} />
              </li>
              <li className="text-capitalize"> {props.info.description} </li>
              <li>
                {" "}
                <div className="float-left">
                  <WeatherIcon code={props.info.icon} size={52} />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-6">
          <div className="temp">
            <h2> {Math.round(props.info.temperature)} °C</h2>
            <ul>
              <li>Humidity:{props.info.humidity} %</li>
              <li>Wind: {props.info.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
