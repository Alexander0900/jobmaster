import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UseIsUserAuth } from "../hooks/UseIsUserAuth";

export const AuthRequired = () => {
  const isUserAuth = UseIsUserAuth();
  const location = useLocation();

  return isUserAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/ads" state={{ from: location }} replace={true} />
  );
};
