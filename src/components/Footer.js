// const Footer = () => {
//     return <h1>Footerrrrr</h1>
// }
// export default Footer
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h5>Contact Us</h5>
            <p>Address: 1234 Main Street, Pacifica, CA</p>
            <p>Email: abcd@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col xs={12} md={4}>
            <h5>Opening Hours</h5>
            <p>Monday - Friday: 9 AM - 9 PM</p>
            <p>Saturday - Sunday: 11 AM - 10 PM</p>
          </Col>
          <Col xs={12} md={4}>
            <h5>Follow Us</h5>
            <p>Facebook</p>
            <p>Instagram</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
