import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavBar.css'
import { useAuth } from '../../hooks/useAuth';
import { useLogout } from '../../hooks/useLogout';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const CustomNavBar = () => {
  const { isAuth, userData } = useAuth();
  const logout = useLogout();

  console.log(isAuth)

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <div>
          {/* <LinkContainer to="/users">
            <Navbar.Brand>Admin panel</Navbar.Brand>
          </LinkContainer> */}

          <LinkContainer to="/ads">
            <Navbar.Brand>Объявления</Navbar.Brand>
          </LinkContainer>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isAuth && (
              <>
                <LinkContainer to="/signin">
                  <Nav.Link>Войти</Nav.Link>
                </LinkContainer>
              </>
            )}

            {/* {isAuth && (
            <>
              <Navbar.Text className="me-3">{userData.email}</Navbar.Text>
              <Button variant="outline-light" onClick={logout}>
                Выйти
              </Button>
            </>
          )} */}
            {isAuth && <NavDropdown
              id="nav-dropdown-dark-example"
              title={userData.email}
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">
              <Button variant="outline-light" onClick={logout}>
                Выйти
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};
