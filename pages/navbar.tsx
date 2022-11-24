import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavigationBar({}) {
    
    return (
        <div>
           <Navbar fixed="top" expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Qolaq</Navbar.Brand>
                    <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav className="me-auto">
                                <Nav.Link href="#intro">Learn</Nav.Link>
                                <Nav.Link href="#qolaq-section">About</Nav.Link>
                                <Nav.Link href="#blockchain-section">Blockchain</Nav.Link>
                                <Nav.Link href="#qolaq-contract-section">Contract</Nav.Link>
                                <Nav.Link href="#how-section">How it works</Nav.Link>
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