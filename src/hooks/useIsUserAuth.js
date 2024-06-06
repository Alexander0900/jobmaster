import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const UseIsUserAuth = () => {
  const { userData } = useContext(UserContext);
  return !!userData.token;
};
