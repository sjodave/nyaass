import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">NYAASS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "60vh" }}
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
            <Nav.Link href="https://www.facebook.com/nyaassorganization">
              <i
                className="fa fa-facebook-f"
                style={{ fontSize: "20px", color: "white" }}
              ></i>
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/_nyaass_/">
              <i
                className="fa fa-instagram"
                style={{ fontSize: "20px", color: "white" }}
              ></i>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/nyaass-organization-1731101a5/">
              <i
                className="fa fa-linkedin-square"
                style={{ fontSize: "20px", color: "white" }}
              ></i>
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/channel/UC39fTtuELHKUQMpzIU0tPSQ">
              <i
                className="fa fa-youtube-play"
                style={{ fontSize: "21px", color: "white" }}
              ></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
