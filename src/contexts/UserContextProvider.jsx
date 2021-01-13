import React, { useState, createContext } from "react";

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
  const [me, setMe] = useState({
    event: "summerburst",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john@doe.com",
  });

  return (
    <UserContext.Provider value={{ me, setMe }}>
      {children}
    </UserContext.Provider>
  );
}
