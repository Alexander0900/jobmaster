import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Container } from "react-bootstrap";
import { Ads } from "../pages/Ads/Ads";
import { Ad } from "../pages/Ad/Ad";
export const Main = () => {
  const parsedAuthData = JSON.parse(sessionStorage.getItem("userData"));

  return (
    <main>
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to={"/signup"} />} />
          {!parsedAuthData?.token && (
            <>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          )}

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/ad" element={<Ad />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};