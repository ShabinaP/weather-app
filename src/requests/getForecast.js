/* eslint-disable no-console */
import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";
  if (searchText) {
    endpoint += `?city=${searchText}`;
  }
  axios
    .get(endpoint)
    .then((response) => {
      setErrorMessage("");
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })

    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage(
          "Sorry, we could not find that town or city, try again!"
        );
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oh dear, server error! Please try again later.");
        console.error("Server error", error);
      }
    });
};
export default getForecast;
