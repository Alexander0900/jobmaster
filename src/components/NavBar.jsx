import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  const parsedAuthData = JSON.parse(sessionStorage.getItem('userData'));

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/Signin'); // Замените '/login' на нужный путь для страницы входа
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <LinkContainer to="/dashboard">
          <Navbar.Brand>Dashboard</Navbar.Brand>
        </LinkContainer>

        <Nav className="me-auto">
          <LinkContainer to="/ads">
            <Nav.Link>Объявление</Nav.Link>
          </LinkContainer>
          {!parsedAuthData?.token && (
            <>
              <LinkContainer to="/signin">
                <Nav.Link>Войти</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Nav.Link>Зарегистрироваться</Nav.Link>
              </LinkContainer>
            </>
          )}
        </Nav>

        {parsedAuthData?.email && (
          <>
            <Navbar.Text className="me-3">{parsedAuthData.email}</Navbar.Text>
            <Button variant="outline-light" onClick={handleLogout}>
              Выйти
            </Button>
          </>
        )}
      </Container>
    </Navbar>
  );
};
