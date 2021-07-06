import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CurrencyChanges } from "./components/CurrencyChanges/CurrencyChanges";

import CurrentRates from "./components/CurrentRates/CurrentRates";

export const App = () => {
  return (
    <BrowserRouter>
      <Container className="pt-4">
        <Switch>
          <Route exact path="/" component={CurrentRates}></Route>
          <Route path="/changes-currency" component={CurrencyChanges}></Route>
          <Redirect to="/" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
