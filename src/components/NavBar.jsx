import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const NavBar = () => {
    return (
        <Navbar bg='primary' variant='dark'>
            <Container>
                <LinkContainer to='/dashboard'>
                    <Navbar.Brand>Dashboard</Navbar.Brand>
                </LinkContainer>
                <Nav>
                    <LinkContainer to='/signin'>
                        <Navbar.Brand>Войти</Navbar.Brand>
                    </LinkContainer>
                    <LinkContainer to='/signup'>
                        <Navbar.Brand>Зарегистрироваться</Navbar.Brand>
                    </LinkContainer>
                    <LinkContainer to='/ads'>
                        <Navbar.Brand>Объявление</Navbar.Brand>
                    </LinkContainer>
                    
                </Nav>
            </Container>
        </Navbar>
    );
};
