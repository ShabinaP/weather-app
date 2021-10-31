import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import WeatherIcon from "react-icons-weather";
import "../styles/forecastSummary.css";

const ForecastSummary = (props) => {
  const { date, icon, temperature, description, onSelect } = props;
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <div className="forecast-details__button">
        <button
          className="moreDetails__button"
          type="button"
          onClick={onSelect(date)}
        >
          More details
        </button>
      </div>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
