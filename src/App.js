import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Post } from "./components/Post";
import { Card } from "./components/Card";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/card" component={Card}></Route>
          <Route path="/post" component={Post}></Route>
          <Redirect to="/" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
