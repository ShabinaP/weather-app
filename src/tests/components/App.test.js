import { render } from "@testing-library/react";
import React from "react";
import App from "../../Components/App";

test("renders correctly", () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});
