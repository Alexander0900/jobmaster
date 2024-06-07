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
    username: paresedUserData?.username || null,
    roles: paresedUserData?.roles || null,
  });

  const updateUserData = ({ token, email, username, roles }) => {
    localStorage.setItem(
      USER_DATA_KEY,
      JSON.stringify({
        token,
        email,
        username,
        roles,
      })
    );
    setUserData({
      token,
      email,
      username,
      roles,
    });
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
