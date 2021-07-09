import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav>
          <Nav.Link href={`/`}>Курсы валют</Nav.Link>
          <Nav.Link href={`/changes-currency`}>Статистика курса валют</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
