import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavbarPage() {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ fontFamily: 'monospace', fontSize: '20px',color:'white' }}>CV - Kamil Spławiński</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home" style={{ fontFamily: 'monospace' ,color:'white'}}>Home</Nav.Link>
            <Nav.Link href="education" style={{ fontFamily: 'monospace',color:'white' }}>Education</Nav.Link>
            <Nav.Link href="experience" style={{ fontFamily: 'monospace' ,color:'white'}}>Experience</Nav.Link>
            <Nav.Link href="technologies" style={{ fontFamily: 'monospace' ,color:'white'}}>Technologies</Nav.Link>
            <NavDropdown title="Projets" style={{color:'white'}}>
              <NavDropdown.Item href="#action/3.1">Software</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Data Science</NavDropdown.Item>           
            </NavDropdown>
            <Nav.Link href="social" style={{ fontFamily: 'monospace',color:'white' }}>Social</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
