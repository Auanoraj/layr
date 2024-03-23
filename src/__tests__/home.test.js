import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import Home from "../components/Home";

const intersectionObserverMock = () => ({
  observe: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

fetch = jest.fn(() => Promise.resolve());

describe("Home Page Test Cases", () => {
  it("Check the render of home page", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("home-page")).toBeInTheDocument();
  });
});
