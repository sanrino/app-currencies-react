import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getCurrencies } from "./actions/currenciesAction";
import { setRateFormAction } from "./reducers/exchangeRateReducer";
import { ExchangeRates } from "./ExchangeRates/ExchangeRates";
import { ExchangeRateDetail } from "./ExchangeRateDetail/ExchangeRateDetail";
import { Header } from "./Header/Header";

export const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());
    dispatch(setRateFormAction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Container className="pt-4">
        <Switch>
          <Route exact path="/" component={ExchangeRates} />
          <Route path="/changes-currency" component={ExchangeRateDetail} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
