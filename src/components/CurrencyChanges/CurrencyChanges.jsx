import React from "react";
import { useSelector } from "react-redux";
import { ExchangeRateDetailTable } from "../ExchangeRateDetail/ExchangeRateDetailTable";
import { ExchangeRateDetailChart } from "../ExchangeRateDetail/ExchangeRateDetailChart";
import { ExchangeRateDetailForm } from "../ExchangeRateDetail/ExchangeRateDetailForm";
import { Col, Row } from "react-bootstrap";

export const CurrencyChanges = () => {
  const exchangeRateFrom = useSelector(
    (state) => state.exchangeRate.exchangeRateFrom[0]
  );
  const exchangeRateTo = useSelector(
    (state) => state.exchangeRate.exchangeRateTo[0]
  );
  return (
    <>
      <h2 className="pb-4">
        Официальный курс гривны относительно иностранных валют
      </h2>

      <Row>
        <Col md="4">
          <ExchangeRateDetailForm />
        </Col>
        <Col md="8">
          {exchangeRateFrom && exchangeRateTo && <ExchangeRateDetailChart />}
          <ExchangeRateDetailTable />
        </Col>
      </Row>
    </>
  );
};
