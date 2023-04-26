import React, { useState } from "react";
import axios from "axios";
import "./og.css";
//import Og from "./og";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "./icon";
import WeatherForecast from "./weatherforecast";

//forecast api fetch

//api fetch and inclusion

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "d59265a17617259a858c34b2c6833049";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  //ui outcome of data fetched

  if (weatherData.ready) {
    return (
      <div className="body">
        <Container>
          <div className="main">
            <Container>
              <h1>Weather App</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="Search"
                  placeholder="Enter a city.."
                  onChange={updateCity}
                />{" "}
                <button className="buttons1" type="Submit">
                  Search
                </button>{" "}
              </form>
              <div className="Weather">
                <Row>
                  <Col>
                    <h3>{weatherData.city.toUpperCase()} </h3>
                    <Icon code={weatherData.icon} size={30} />
                    <h2>{weatherData.description} </h2>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h2 className="temp">
                      {Math.round(weatherData.temperature)}°C{" "}
                    </h2>
                  </Col>

                  <Col>
                    <h4>
                      <span className="hum">Humidity: </span>
                      <span className="humdata">{weatherData.humidity} % </span>
                    </h4>
                    <h4>
                      <span className="hum">Wind: </span>
                      <span className="humdata">
                        {" "}
                        {Math.round(weatherData.wind)} km/hr{" "}
                      </span>
                    </h4>
                  </Col>
                </Row>

                <br />
                <hr />
                <h4 className="forecastheading">5 DAY FORECAST</h4>
                <Row className="forecast1">
                  {weatherData.coordinates && (
                    <WeatherForecast coordinates={weatherData.coordinates} />
                  )}
                </Row>
                <hr />

                <h5 className="link">
                  <a
                    href="https://github.com/ladykabbz/weather-re"
                    target="blank"
                  >
                    Open-source code
                  </a>
                  ,by NICOLE KABII
                </h5>
              </div>
            </Container>
          </div>
        </Container>
      </div>
    );
  } else {
    search();
    return "loading..";
  }
}
