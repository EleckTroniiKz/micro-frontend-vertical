import { renderHook, act } from "@testing-library/react-hooks";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button.jsx";
import React, { Children } from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";

setupMock();

describe("Button", () => {
  it("renders Button", () => {
    const result = render(<Button onClick={() => {}} />);

    expect(result).not.toBeNull();
    expect(result.container.querySelector("#button-container")).not.toBeNull();
  });

  it("calls onClick", () => {
    const mockMethod = jest.fn();
    const result = render(<Button onClick={mockMethod} />);

    const button =
      result.container.querySelector("#button-container").firstChild;
    fireEvent.click(button);

    expect(mockMethod).toHaveBeenCalled();
  });
});

function setupMock() {
  jest.mock("react-router-dom", () => ({
    Button: () => <div>Button</div>,
  }));
}
