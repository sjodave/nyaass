import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top" id="navbar">
      <Navbar.Brand to="#">NYAASS</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="w-100" style={{ maxHeight: "60vh" }} navbarScroll>
          <Link to="/">Home</Link>
          <NavDropdown
            title="About Us"
            id="navbarScrollingDropdown"
            className="dropdown"
          >
            <NavDropdown.Item>
              <Link to="/about-us">About Us</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/founding-story">Founding Story</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/education-model">Education model</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link to="/Projects">Projects</Link>
          <Link to="/Events">Events</Link>
          <Link to="/Funding">Funding</Link>
          <Link to="/Join-the-moment">Join The Moment</Link>
          <div className="ms-lg-auto social">
            <a href="https://www.facebook.com/nyaassorganization">
              <i
                className="fa fa-facebook-f"
                style={{ fontSize: "20px", color: "white" }}
              ></i>
            </a>
            <a href="https://www.instagram.com/_nyaass_/">
              <i
                className="fa fa-instagram"
                style={{ fontSize: "20px", color: "white" }}
              ></i>
            </a>
            <a href="https://www.linkedin.com/in/nyaass-organization-1731101a5/">
              <i
                className="fa fa-linkedin-square"
                style={{ fontSize: "20px", color: "white" }}
              ></i>
            </a>
            <a href="https://www.youtube.com/channel/UC39fTtuELHKUQMpzIU0tPSQ">
              <i
                className="fa fa-youtube-play"
                style={{ fontSize: "21px", color: "white" }}
              ></i>
            </a>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavScrollExample;
