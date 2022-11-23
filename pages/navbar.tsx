import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavigationBar({}) {
    
    return (
        <div>
           <Navbar expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Qolaq</Navbar.Brand>
                    <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                            <Nav className="">
                                <Nav.Link href="#home">Login</Nav.Link>
                                <Nav.Link href="#home">Register</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}