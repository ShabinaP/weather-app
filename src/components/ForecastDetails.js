import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/forecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, wind, humidity } = forecast;
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__maxTemperature">
        {`Max temp: ${temperature.max}`}&deg;C
      </div>
      <div className="forecast-details__minTemperature">
        {`Min temp: ${temperature.min}`}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      <div className="forecast-details__windSpeed">
        Wind speed: {wind.speed}mph
      </div>
      <div className="forecast-details__windDirection">
        Wind direction: {wind.direction}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
