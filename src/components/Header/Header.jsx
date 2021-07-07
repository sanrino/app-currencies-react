import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href={`/`}>Navbar</Navbar.Brand>
        <Nav>
          <Nav.Link href={`/`}>Курсы валют</Nav.Link>
          <Nav.Link href={`/changes-currency`}>Сатистика курса валют</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
