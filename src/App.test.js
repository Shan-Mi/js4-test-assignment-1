import React from "react";
import { mount } from "enzyme";
import App from "./App";
import UserContextProvider from "./contexts/UserContextProvider";
import { BrowserRouter } from "react-router-dom";

describe("Test context", () => {
  it(`Renders 'me' info correctly in internal-link`, () => {
    const me = {
      event: "summerburst",
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john@doe.com",
    };
    const wrapper = mount(
      <BrowserRouter>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </BrowserRouter>
    );
    const internalUserinfo = wrapper.find(".internal-link").text();
    expect(internalUserinfo).toContain(me.username);
  });
});
