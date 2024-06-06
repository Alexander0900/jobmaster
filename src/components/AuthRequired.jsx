import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useIsUserAuth } from "../hooks/useIsUserAuth";

export const AuthRequired = () => {
  const isUserAuth = useIsUserAuth();
  const location = useLocation();

  return isUserAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/ads" state={{ from: location }} replace={true} />
  );
};
