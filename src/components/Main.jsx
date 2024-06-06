import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Container } from "react-bootstrap";
import { Ads } from "../pages/Ads/Ads";
import { Ad } from "../pages/Ad/Ad";
import { useAuth } from "../hooks/useAuth";

export const Main = () => {
  const { isAuth } = useAuth();

  return (
    <main>
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to={"/signup"} />} />
          {!isAuth && (
            <>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          )}

          {isAuth && (
            <>
              <Route path="/users" element={<Dashboard />} />
              <Route path="/ad" element={<Ad />} />
            </>
          )}

          <Route path="/ads" element={<Ads />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};