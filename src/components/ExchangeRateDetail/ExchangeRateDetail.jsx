import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";

import { configData } from "../actions/currenciesAction";
import { ExchangeRateDetailForm } from "./ExchangeRateDetailForm";
import { ExchangeRateDetailTable } from "./ExchangeRateDetailTable";
import { ExchangeRateDetailChart } from "./ExchangeRateDetailChart";
import { getDates } from "../format/format";
import dayjs from "dayjs";

export const ExchangeRateDetail = () => {
  const dispatch = useDispatch();

  const currencies = useSelector((state) => state.currencies.currencies);
  const rateFormData = useSelector((state) => state.exchangeRate.rateForm);
  const points = useSelector((state) => state.exchangeRate.configData);

  console.log({ rateFormData });

  // get array days
  const datePeriod = getDates(
    new Date(rateFormData.startDate),
    new Date(rateFormData.endDate)
  );

  useEffect(() => {
    dispatch(configData(datePeriod, rateFormData.currencyCode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rateFormData]);

  return (
    <>
      <h2 className="pb-4 text-center">
        {`Официальный курс гривны относительно иностранных валют за период ${dayjs(
          rateFormData.startDate
        ).format("DD.MM.YYYY")} - ${dayjs(rateFormData.endDate).format(
          "DD.MM.YYYY"
        )}
        `}
      </h2>

      <Row>
        <Col lg="3">
          <ExchangeRateDetailForm
            currenciesData={currencies}
            rateCode={rateFormData.currencyCode}
          />
        </Col>
        <Col lg="9">
          {!!points[0] && (
            <>
              <ExchangeRateDetailChart pointsData={points} />
              <ExchangeRateDetailTable pointsData={points} />
            </>
          )}
        </Col>
      </Row>
    </>
  );
};
