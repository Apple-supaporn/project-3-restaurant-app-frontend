import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="dark" className='sticky-top'>
        <Container>
          <Navbar.Brand href="home">Restaurant</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default Header;