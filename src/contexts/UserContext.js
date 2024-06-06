import React, { createContext, useState } from "react";

const USER_DATA_KEY = "userData";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const userDataStorageJSON = localStorage.getItem(USER_DATA_KEY);
  const paresedUserData = userDataStorageJSON
    ? JSON.parse(userDataStorageJSON)
    : null;

  const [userData, setUserData] = useState({
    token: paresedUserData?.token || null,
    email: paresedUserData?.email || null,
  });

  const updateUserData = ({ token, email }) => {
    localStorage.setItem(
      USER_DATA_KEY,
      JSON.stringify({
        token,
        email,
      })
    );
    setUserData({
      token,
      email,
    });
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
