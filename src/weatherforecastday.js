import React from "react";
import "./og.css";

export default function WeatherForecastDay(props) {
  console.log(props);
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }
  function Icon() {
    let Icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return Icon;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="forecast">
        <div className="d-flex justify-content-evenly">
          <div className="days">
            <div className="forecastDay">{day()}</div>
            <div className="forecastIcon">
              <img
                src={Icon()}
                alt="weather icon"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div className="weatherTemp">
              <span className="maxTemp">{maxTemp()}</span>
              <span className="minTemp">{minTemp()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
