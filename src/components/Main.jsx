import { Routes, Route, Navigate } from "react-router-dom";
import { Admin } from "../pages/Admin";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Container } from "react-bootstrap";
import { Ads } from "../pages/Ads/Ads";
import { Ad } from "../pages/Ad/Ad";
import { AuthRequired } from "./AuthRequired";
import { UseIsUserAuth } from "../hooks/UseIsUserAuth";
import { MyAds } from "../pages/MyAds";
import { isAdmin } from "../utils/isAdmin";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Main = () => {
  const isUserAuth = UseIsUserAuth();
  const { userData } = useContext(UserContext);

  return (
    <main>
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to={"/signup"} />} />

          <Route
            path="/signin"
            element={!isUserAuth ? <SignIn /> : <Navigate to="/ads" />}
          />
          <Route
            path="/signup"
            element={!isUserAuth ? <SignUp /> : <Navigate to="/ads" />}
          />

          <Route element={<AuthRequired />}>
            <Route
              path="/admin"
              element={
                isAdmin(userData.roles) ? <Admin /> : <Navigate to="/ads" />
              }
            />
            <Route path="/add-ad" element={<Ad />} />
            <Route path="/my-ads" element={<MyAds />} />
          </Route>

          <Route path="/ads" element={<Ads />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};
