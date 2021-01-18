import React from "react";
import App from "../../App";
import { mount } from "enzyme";
import UserContextProvider from "../../contexts/UserContextProvider";
import { BrowserRouter, Link } from "react-router-dom";
import ActionPoint from "../ActionPoint";

describe("render correct ActionPoint components", () => {
  const me = {
    event: "summerburst",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john@doe.com",
  };

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

  it("should render 4 ActionPoint components with className 'the__dot'", () => {
    expect(wrapper.find(".the__dot").length).toEqual(4);
  });

  describe("Tests for internalLinks", () => {
    let APWrapper;
    const linkInternal = {
      getFrontendUrl: "/myFrontendURL",
      title: "My Frontend URL",
    };
    beforeEach(() => {
      APWrapper = mount(
        <BrowserRouter>
          <UserContextProvider>
            <ActionPoint
              title="This is a internal link title"
              description="This is a description"
              top={10}
              left={10}
              linkKind={0}
              linkInternal={linkInternal}
              iconKind={0}
            />
          </UserContextProvider>
        </BrowserRouter>
      );
    });

    it("should have className 'internal-link'", () => {
      expect(APWrapper.find(".internal-link").length).toBe(1);
    });

    it("should have className 'links__icon--'", () => {
      expect(APWrapper.find(".links__icon--").length).toBe(1);
    });

    it("should route to the correct internal url once click it", () => {
      expect(APWrapper.find(Link).props().to).toBe(`/${me.event}`);
    });

    it("should show correct username", () => {
      const internalUserinfo = wrapper.find(".internal-link").text();
      expect(internalUserinfo).toContain(me.username);
    });

    it("should show correct title for internal link", () => {
      const internalTitle = APWrapper.find(".internal-link").text();
      expect(internalTitle).toContain("This is a internal link title");
    });
  });

  describe("Tests for externalLink", () => {
    let APWrapper;
    const linkExternal = "https://www.google.com";
    beforeEach(() => {
      APWrapper = mount(
        <BrowserRouter>
          <UserContextProvider>
            <ActionPoint
              title="This is a external link title"
              description="This is a description"
              top={30}
              left={20}
              linkKind={1}
              linkExternal={linkExternal}
              iconKind={1}
            />
          </UserContextProvider>
        </BrowserRouter>
      );
    });

    it("should have className 'external-link'", () => {
      expect(APWrapper.find(".external-link").length).toBe(1);
    });

    it("should have className 'links__icon--image'", () => {
      expect(APWrapper.find(".links__icon--image").length).toBe(1);
    });

    it("should show correct title for external link", () => {
      const externalTitle = APWrapper.find(".external-link").text();
      expect(externalTitle).toContain("This is a external link title");
    });

    it("should open the correct external url once click it", () => {
      expect(APWrapper.find(".external-link").props().href).toBe(linkExternal);
    });
  });

  describe("Tests for modalLink", () => {
    let APWrapper;
    beforeEach(() => {
      APWrapper = mount(
        <BrowserRouter>
          <UserContextProvider>
            <ActionPoint
              title="This is a Modal link title"
              description="This is a description"
              top={50}
              left={30}
              linkKind={2}
              iconKind={1}
            />
          </UserContextProvider>
        </BrowserRouter>
      );
    });

    it("should have className 'modal-link'", () => {
      expect(APWrapper.find(".modal-link").length).toBe(1);
    });

    it("should have className 'links__icon--image'", () => {
      expect(APWrapper.find(".links__icon--image").length).toBe(1);
    });

    it("should show correct title for modal link", () => {
      const modalTitle = APWrapper.find(".modal-link").text();
      expect(modalTitle).toContain("This is a Modal link title");
    });
  });

  describe("Tests for DocumentLink", () => {
    let APWrapper;
    const linkDocument = "https://www.google.se/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    beforeEach(() => {
      APWrapper = mount(
        <BrowserRouter>
          <UserContextProvider>
            <ActionPoint
              title="This is a Document link title"
              description="This is a description"
              top={70}
              left={40}
              linkKind={3}
              iconKind={1}
              linkDocument={linkDocument}
            />
          </UserContextProvider>
        </BrowserRouter>
      );
    });

    it("should have className 'document-link'", () => {
      expect(APWrapper.find(".document-link").length).toBe(1);
    });

    it("should have className 'links__icon--image'", () => {
      expect(APWrapper.find(".links__icon--image").length).toBe(1);
    });

    it("should show correct title for document link", () => {
      const linkTitle = APWrapper.find(".document-link").text();
      expect(linkTitle).toContain("This is a Document link title");
    });

    it("should open the correct document url once click it", () => {
      expect(APWrapper.find(".document-link").props().href).toBe(linkDocument);
    });
  });
});
