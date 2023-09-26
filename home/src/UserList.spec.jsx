import { renderHook, act } from "@testing-library/react-hooks";
import { render, screen } from "@testing-library/react";
import UserList from "./UserList.jsx";
import React, { Children } from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";

const userMock = [
  {
    id: 1,
    name: "Jochen Schweizer",
    gender: "Male",
    country: "Germany",
    height: "180",
  },
  {
    id: 2,
    name: "Jane Doe",
    gender: "Female",
    country: "Germany",
    height: "180",
  },
];

setupMock();

describe("UserList", () => {
  it("renders UserList", () => {
    const result = render(
      <BrowserRouter>
        <UserList users={userMock} />
      </BrowserRouter>
    );

    const listContainer = result.container.querySelector("#user-list");

    expect(result).not.toBeNull();
    expect(listContainer).not.toBeNull();
  });

  it("renders children of UserList", () => {
    const result = render(
      <BrowserRouter>
        <UserList users={userMock} />
      </BrowserRouter>
    );

    const children = [];

    userMock.forEach((user) =>
      children.push(result.container.querySelector(`#User-${user.id}`))
    );

    expect(children.length).toBe(2);
  });

  it("renders message, that there are no users, if list empty", () => {
    const result = render(
      <BrowserRouter>
        <UserList users={[]} />
      </BrowserRouter>
    );

    expect(result.container.children.length).toBe(1);
    expect(result).not.toBeNull();
  });
});

function setupMock() {
  jest.mock("react-router-dom", () => ({
    Button: () => <div>Button</div>,
  }));
}
