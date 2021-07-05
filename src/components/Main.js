import React from "react";
import { Nav } from "react-bootstrap";

export const Main = () => {
  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/post">Post</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/card">Card</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
