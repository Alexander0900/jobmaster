import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import React from "react";
import { UserProvider } from "./contexts/UserContext";

export const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </UserProvider>
  );
};
