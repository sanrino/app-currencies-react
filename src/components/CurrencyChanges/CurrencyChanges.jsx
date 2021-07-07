import React, { useState, useEffect } from "react";
import uniqId from "uniqid";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrencies,
  getCurrenciesFrom,
  getCurrenciesTo,
} from "../actions/currencies";
import { Formik } from "formik";
import { FormikControl } from "../FormikControl/FormikControl";
import { formatDate } from "../format/format";
import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";
import { Line } from "react-chartjs-2";

export const CurrencyChanges = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());
  }, []);

  useEffect(() => {
    chart();
  }, []);

  const currencies = useSelector((state) => state.currencies.items);
  const currenciesFrom = useSelector((state) => state.currencies.itemsFrom);
  const currenciesTo = useSelector((state) => state.currencies.itemsTo);

  // console.log("currenciesFrom", currenciesFrom);
  // console.log("currenciesTo", currenciesTo);

  let codeCurrencies = currencies.map((code) => {
    let newData = {
      id: uniqId(),
      value: code.cc,
    };
    return newData;
  });

  //current date - 12 months
  const dateLastYear = new Date();
  dateLastYear.setMonth(dateLastYear.getMonth() - 12);

  const initialValues = {
    startDate: dateLastYear,
    endDate: new Date(),
    currencyCode: "CAD",
  };
  const [chartForm, setChartform] = useState({
    currencyCode: "CAD",
    startDate: formatDate(dateLastYear),
    endDate: formatDate(new Date()),
  });

  useEffect(() => {
    dispatch(getCurrenciesFrom(chartForm.currencyCode, chartForm.startDate));
    dispatch(getCurrenciesTo(chartForm.currencyCode, chartForm.endDate));
  }, [chartForm]);

  const [chartData, setChartData] = useState({});

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
    setChartform(data);
  };

  const chart = () => {
    setChartData({
      labels: ["пн", "вт", "ср", "чт", "пт"],
      datasets: [
        {
          label: "lorem",
          data: [32, 45, 12, 76, 69],
          backgroundColor: "rgba(75,192,192,0.6)",
          borderWidth: 4,
        },
      ],
    });
  };

  return (
    <>
      <h2 className="pb-4">
        Официальный курс гривны относительно иностранных валют
      </h2>

      <Row>
        <Col xs="4">
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
                    label="Название валюти"
                    name="currencyCode"
                    options={codeCurrencies}
                    className="mb-3"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Посмотреть график
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
        <Col>
          <Line data={chartData} />
        </Col>
      </Row>
    </>
  );
};
