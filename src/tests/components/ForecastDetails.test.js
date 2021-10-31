import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../Components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1525046400000,
    temperature: {
      min: 3,
      max: 14,
    },
    humidity: 12,
    wind: {
      speed: 20,
      direction: "n",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders correct value for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Mon 30th Apr")).toHaveClass("forecast-details__date");
    expect(getByText("Min temp: 3°C")).toHaveClass(
      "forecast-details__minTemperature"
    );
    expect(getByText("Max temp: 14°C")).toHaveClass(
      "forecast-details__maxTemperature"
    );
    expect(getByText("Humidity: 12%")).toHaveClass(
      "forecast-details__humidity"
    );
    expect(getByText("Wind speed: 20mph")).toHaveClass(
      "forecast-details__windSpeed"
    );
    expect(getByText("Wind direction: n")).toHaveClass(
      "forecast-details__windDirection"
    );
  });
});
