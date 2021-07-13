import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  const [active, setActive] = useState("home");
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav
          activeKey={active}
          onSelect={(selectedKey) => setActive(selectedKey)}
        >
          <Nav.Link eventKey="home" as={Link} to="/">
            Курсы валют
          </Nav.Link>
          <Nav.Link
            eventKey="changes-currency"
            as={Link}
            to="/changes-currency"
          >
            Статистика курса валют
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
