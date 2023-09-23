import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import "../Home.css"

function Footer() {
  return (
    <footer className="footer-bg text-black py-4">
      <Container>
        <Row>
          <Col xs={12} md={4} className="text-center">
            <h5>- Contact Us- </h5>
            <p>Address: 1234 Main Street, Pacifica, CA</p>
            <p>Email: abcd@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h5>- Opening Hours -<br/>(all locations)</h5>
            <p>Monday - Friday: 9 AM - 9 PM</p>
            <p>Saturday - Sunday: 11 AM - 10 PM</p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h5>- Follow Us -</h5>
            <p><Link to="/home">Facebook</Link></p>
            <p><Link to="/home">Instagram</Link></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
