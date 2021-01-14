import React from "react";
import App from "../../App";
import { mount } from "enzyme";
import UserContextProvider from "../../contexts/UserContextProvider";
import { BrowserRouter } from "react-router-dom";

// check className in linkKind
// check className in IconCSSClass

describe("render correct ActionPoint components", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </BrowserRouter>
    );
  });

  it("should render ActionPoint component", () => {
    console.log(wrapper.find(".the__dot"));
    expect(wrapper.find(".the__dot").length).toEqual(4);
  });
});
