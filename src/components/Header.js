import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  const headerStyle = { backgroundColor: 'rgb(255, 196, 0)'}
  const linkStyle = { marginRight: '10px' };
  
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
            <Link to="/home" style={linkStyle}>Home</Link>
            <Link to="/location" style={linkStyle}>Locations</Link>
            <Link to="/menu" style={linkStyle}>Menu</Link>
            <Link to="/menu/new" style={linkStyle}>Create New Menu</Link>
            <Link to="/location/new" style={linkStyle}>Create New Location</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
