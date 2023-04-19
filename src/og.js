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
              <h3>lisbon</h3>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <h2>24c </h2>
            </Col>
            <Col>
              <p>Humidity:45% </p>
              <p>Wind:23km/hr </p>
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
