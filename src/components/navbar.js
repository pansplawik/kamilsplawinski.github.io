import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export function NavbarPage() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand style={{ fontFamily: 'monospace', fontSize: '20px' }}>CV - Kamil Spławiński</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ fontFamily: 'monospace' }}>Home</Nav.Link>
            <Nav.Link href="#education" style={{ fontFamily: 'monospace' }}>Education</Nav.Link>
            <Nav.Link href="#experience" style={{ fontFamily: 'monospace' }}>Experience</Nav.Link>
            <Nav.Link href="#technologies" style={{ fontFamily: 'monospace'}}>Technologies</Nav.Link>
            <NavDropdown title="Projets" >
              <NavDropdown.Item href="#soft">Software</NavDropdown.Item>
              <NavDropdown.Item href="#data">Data Science</NavDropdown.Item>           
            </NavDropdown>
            <Nav.Link href="#social" style={{ fontFamily: 'monospace' }}>Social</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
