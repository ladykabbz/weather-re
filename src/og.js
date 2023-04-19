import React from "react";
import "./og.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Weather from "./weather";
import "./og.css";

export default function Og(props) {
  return (
    <div className="main">
      <Container>
        <h1>Weather App</h1>
        <div className="Weather">
          <Weather />
          <Row>
            <Col>
              <ul>
                <li>{props.data.city} </li>

                <li>{props.data.description} </li>
                <li>
                  {props.data.icon} size={52}{" "}
                </li>
              </ul>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <h2>{props.data.temperature} </h2>
            </Col>
            <Col>
              <p>Humidity:{props.data.humidity}% </p>
              <p>Wind:{props.data.wind} </p>
            </Col>
          </Row>

          <br />

          <Row className="forecast">
            <hr />
            <Col>
              <strong>
                Tuesday <br /> ☀ <br /> 19C
              </strong>
            </Col>
            <Col>
              <strong>
                Wednesday <br /> ☀ <br /> 19C
              </strong>
            </Col>
            <Col>
              <strong>
                Thursday <br /> ☀ <br /> 19C
              </strong>
            </Col>
            <Col>
              <strong>
                Friday <br /> ☀ <br /> 19C
              </strong>
            </Col>
            <Col>
              <strong>
                Saturday <br /> ☀ <br /> 19C
              </strong>
            </Col>
          </Row>
          <hr />
          <br />
          <h5>
            <a href="https://github.com/ladykabbz/weather-re" target="blank">
              Open-source code
            </a>
            ,by NICOLE KABII
          </h5>
        </div>
      </Container>
    </div>
  );
}
