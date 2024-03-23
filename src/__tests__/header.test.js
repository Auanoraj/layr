import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../components/Header";

describe("Header Test Cases", () => {
  it("updates on change", () => {
    render(<Header />);

    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
