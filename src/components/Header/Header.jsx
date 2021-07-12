import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav>
          <Nav.Link as={Link} to="/">
            Курсы валют
          </Nav.Link>
          <Nav.Link as={Link} to="/changes-currency">
            Статистика курса валют
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
