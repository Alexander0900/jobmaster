import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Container } from "react-bootstrap";
import { Ads } from "../pages/Ads/Ads";
import { Ad } from "../pages/Ad/Ad";
import { AuthRequired } from "./AuthRequired";
import { UseIsUserAuth } from "../hooks/UseIsUserAuth";
import { MyAds } from "../pages/MyAds";

export const Main = () => {
  const isUserAuth = UseIsUserAuth();

  return (
    <main>
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to={"/signup"} />} />

          <Route
            path="/signin"
            element={!isUserAuth ? <SignIn /> : <Navigate to="/users" />}
          />
          <Route
            path="/signup"
            element={!isUserAuth ? <SignUp /> : <Navigate to="/users" />}
          />

          <Route element={<AuthRequired />}>
            <Route path="/users" element={<Dashboard />} />
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
