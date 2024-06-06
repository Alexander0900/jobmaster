import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useIsUserAuth = () => {
  const { userData } = useContext(UserContext);
  return !!userData.token;
};
