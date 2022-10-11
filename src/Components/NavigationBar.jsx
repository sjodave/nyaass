import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">NYAASS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/founding-story">
                Founding Story
              </NavDropdown.Item>
              <NavDropdown.Item href="/education-model">
                Education model
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Events">Events</Nav.Link>
            <Nav.Link href="/Funding">Funding</Nav.Link>
            <Nav.Link href="/Join-the-moment">Join The Moment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
