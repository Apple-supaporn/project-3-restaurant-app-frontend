import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const headerStyle = { backgroundColor: 'rgb(255, 196, 0)',}
  return (
    <div>
      <Navbar style={headerStyle} className='sticky-top'>
        <Container>
          <Navbar.Brand href="home">
            <img 
              src="/assets/images/logo-patxis.jpg"
              alt="Logo"
              width="120"
              height="auto"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/location">Locations</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/menu/new">Create New Menu</Nav.Link>
            <Nav.Link href="/location/new">Create New Location</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header