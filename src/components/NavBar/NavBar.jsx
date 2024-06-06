import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NavBar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useIsUserAuth } from "../../hooks/useIsUserAuth";

export const CustomNavBar = () => {
  const navigate = useNavigate();
  const { userData, updateUserData } = useContext(UserContext);
  const isUserAuth = useIsUserAuth();

  const handleLogout = () => {
    updateUserData({
      token: null,
      email: null,
    });

    navigate("/ads");
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <div>
          {isUserAuth && (
            // TODO: add role admin
            <LinkContainer to="/users">
              <Navbar.Brand>Админ панель</Navbar.Brand>
            </LinkContainer>
          )}

          <LinkContainer to="/ads">
            <Navbar.Brand>Объявления</Navbar.Brand>
          </LinkContainer>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isUserAuth && (
              <LinkContainer to="/signin">
                <Nav.Link>Войти</Nav.Link>
              </LinkContainer>
            )}

            {isUserAuth && (
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={userData.email}
                menuVariant="dark"
              >
                <NavDropdown.Item
                  style={{ textAlign: "center" }}
                  onClick={handleLogout}
                >
                  Выйти
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
