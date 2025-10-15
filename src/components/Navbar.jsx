import { Container, Nav, Navbar } from 'react-bootstrap';

function NavbarPrincipal() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" fluid>
            <Container fluid>
                <Navbar.Brand href="#home" className='text-info'> <img className='logo' src="/pc-andes-logo.png" alt="logo" width={100} /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#">Características</Nav.Link>
                        <Nav.Link href="#cotizador" className='text-info fw-bold'>Ver DEMO</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarPrincipal;