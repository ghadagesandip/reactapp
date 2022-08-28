import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Navigation({token, onLogout}) {
  console.log('token :', token)
  return (
      <Navbar bg="primary" variant="dark">
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Demo App</Navbar.Brand>
          </LinkContainer>
            <Nav className="me-auto">
            {
              token && (
              <>
                <LinkContainer to="/">
                  <Nav.Link> Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </LinkContainer>
                <Form className="d-flex" >
                  <Button variant="outline-success" onClick={onLogout}>Sign Out</Button>
                </Form>
            </>
            )
            }
            {
              !token && (
                <>
                 <LinkContainer to="/login">
                    <Nav.Link href="/login">Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link href="/register">Register</Nav.Link>
                  </LinkContainer>
                </>
              )
            }
            
        </Nav>
      </Navbar>
  );
}

export default Navigation;