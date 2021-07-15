import React from "react";

import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { date } from "yup";
import uniqId from "uniqid";
import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";

import { setRateFormAction } from "../reducers/exchangeRateReducer";
import { FormikControl } from "../FormikControl/FormikControl";
import dayjs from "dayjs";

export const ExchangeRateDetailForm = ({ currenciesData, rateCode }) => {
  const dispatch = useDispatch();

  let codeCurrencies = currenciesData.map((code) => {
    let newData = {
      id: uniqId(),
      value: code.cc,
    };
    return newData;
  });

  //current date subtract 12 months
  // default format date
  let dateLastMonth = dayjs().subtract(1, "month").toDate();

  const initialValues = {
    startDate: dateLastMonth,
    endDate: new Date(),
    currencyCode: rateCode,
  };

  const validationSchema = yup.object({
    startDate: date().max(
      yup.ref("endDate"),
      "Дата начала не может быть раньше даты окончания"
    ),
    currencyCode: yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    if (Date.parse(values.endDate) > Date.parse(values.startDate)) {
      const data = {
        ...values,
        startDate: values.startDate,
        endDate: values.endDate,
      };
      dispatch(setRateFormAction(data));
    }
  };

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
