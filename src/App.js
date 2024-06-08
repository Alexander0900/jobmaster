import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import React from "react";
import { UserProvider } from "./contexts/UserContext";
import dayjs from "dayjs";
import ru from "dayjs/locale/ru";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("ru");
dayjs.extend(relativeTime);
dayjs.locale(ru);

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
