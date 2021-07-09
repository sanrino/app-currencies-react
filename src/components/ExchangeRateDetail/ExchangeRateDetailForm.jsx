import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqId from "uniqid";
import * as yup from "yup";
import {
  getCurrencies,
  getExchangeRateFrom,
  getExchangeRateTo,
} from "../actions/currencies";
import { Formik } from "formik";
import { FormikControl } from "../FormikControl/FormikControl";
import { formatDate } from "../format/format";
import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";

export const ExchangeRateDetailForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());
  }, []);

  const currencies = useSelector((state) => state.currencies.items);

  const exchangeRateValues = useSelector(
    (state) => state.exchangeRate.exchangeRateItem
  );

  const [exchangeRateForm, setExchangeRateForm] = useState(exchangeRateValues);

  let codeCurrencies = currencies.map((code) => {
    let newData = {
      id: uniqId(),
      value: code.cc,
    };
    return newData;
  });

  //current date - 12 months
  let dateLastYear = new Date();
  dateLastYear.setMonth(dateLastYear.getMonth() - 12);

  const initialValues = {
    startDate: dateLastYear,
    endDate: new Date(),
    currencyCode: "USD",
  };

  const validationSchema = yup.object({
    startDate: yup.date().required("Required").nullable(),
    endDate: yup.date().required("Required").nullable(),
    currencyCode: yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    const data = {
      ...values,
      startDate: formatDate(values.startDate),
      endDate: formatDate(values.endDate),
    };
    setExchangeRateForm(data);
  };

  useEffect(() => {
    dispatch(
      getExchangeRateFrom(
        exchangeRateForm.currencyCode,
        exchangeRateForm.startDate
      )
    );
    dispatch(
      getExchangeRateTo(exchangeRateForm.currencyCode, exchangeRateForm.endDate)
    );
  }, [exchangeRateForm]);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3 flex-start">
              <Col>
                <FormikControl control="date" name="startDate" />
              </Col>
              <Col>
                <FormikControl control="date" name="endDate" />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3">
              <FormikControl
                control="select"
                name="currencyCode"
                options={codeCurrencies}
                className="mb-3"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Отобразить
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
