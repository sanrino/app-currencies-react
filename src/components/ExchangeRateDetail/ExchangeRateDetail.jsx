import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { configData } from "../actions/currenciesAction";
import { ExchangeRateDetailForm } from "./ExchangeRateDetailForm";
import { ExchangeRateDetailTable } from "./ExchangeRateDetailTable";
import { ExchangeRateDetailChart } from "./ExchangeRateDetailChart";
import { convertDate, formatDate, getDates } from "../format/format";

export const ExchangeRateDetail = () => {
  const dispatch = useDispatch();

  const currencies = useSelector((state) => state.currencies.currencies);
  const rateFormData = useSelector((state) => state.exchangeRate.rateForm);
  const points = useSelector((state) => state.exchangeRate.configData);

  //current date - 12 months
  // default format date
  let dateLastYear = new Date();
  dateLastYear.setMonth(dateLastYear.getMonth() - 12);

  // get array days
  const datesArray = getDates(
    new Date(convertDate(rateFormData.startDate)),
    new Date(convertDate(rateFormData.endDate))
  );

  const quarterArray = Math.floor(
    (datesArray.length - datesArray.length / 2) / 2
  );

  const dates = [
    datesArray[0],
    datesArray[quarterArray],
    datesArray.splice(Math.floor((datesArray.length - 1) / 2), 1)[0],
    datesArray[datesArray.length - 1 - quarterArray],
    datesArray[datesArray.length - 1],
  ];

  useEffect(() => {
    dispatch(
      configData(
        formatDate(dates[0]),
        formatDate(dates[1]),
        formatDate(dates[2]),
        formatDate(dates[3]),
        formatDate(dates[4]),
        rateFormData.currencyCode
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rateFormData]);

  return (
    <>
      <h2 className="pb-4">
        Официальный курс гривны относительно иностранных валют
      </h2>

      <Row>
        <Col lg="3">
          <ExchangeRateDetailForm
            currenciesData={currencies}
            rateCode={rateFormData.currencyCode}
          />
        </Col>
        <Col lg="9">
          {!!points.start && (
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
