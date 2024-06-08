import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NavBar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { UseIsUserAuth } from "../../hooks/UseIsUserAuth";
import { isAdmin } from "../../utils/isAdmin";

export const CustomNavBar = () => {
  const navigate = useNavigate();
  const { userData, updateUserData } = useContext(UserContext);
  const isUserAuth = UseIsUserAuth();

  const handleLogout = () => {
    updateUserData({
      token: null,
      email: null,
      username: null,
      roles: null,
    });

    navigate("/ads");
  };

  return (
    <Navbar bg="primary" variant="dark" style={{ padding: 16 }}>
      <Container>
        <LinkContainer to="/ads">
          <Navbar.Brand>Job master</Navbar.Brand>
        </LinkContainer>

        <div>
          {!isUserAuth && (
            <LinkContainer style={{ color: "#FFFFFF" }} to="/signin">
              <Nav.Link>Войти</Nav.Link>
            </LinkContainer>
          )}

          {isUserAuth && (
            <NavDropdown
              style={{ color: "#FFFFFF" }}
              title={userData.username}
              menuVariant="white"
            >
              {isUserAuth && isAdmin(userData.roles) && (
                <NavDropdown.Item
                  style={{ textAlign: "center" }}
                  onClick={() => navigate("/admin")}
                >
                  Admin
                </NavDropdown.Item>
              )}

              <NavDropdown.Item
                style={{ textAlign: "center" }}
                onClick={() => navigate("/add-ad")}
              >
                Разместить объявление
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ textAlign: "center" }}
                onClick={() => navigate("/my-ads")}
              >
                Мои объвления
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ textAlign: "center" }}
                onClick={handleLogout}
              >
                Выйти
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </div>
      </Container>
    </Navbar>
  );
};
