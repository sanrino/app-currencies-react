import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from "../actions/currencies";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../FormikControl/FormikControl";

export const CurrencyChanges = () => {
  const dispatch = useDispatch();

  const currencies = useSelector((state) => state.currencies.items);
  useEffect(() => {
    dispatch(getCurrencies());
  }, []);

  const initialValues = {
    startDate: null,
    endDate: null,
    currencyCode: "",
  };

  const validationSchema = Yup.object({
    startDate: Yup.date().required("Required").nullable(),
    endDate: Yup.date().required("Required").nullable(),
    currencyCode: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl control="date" name="startDate" />
          <FormikControl control="date" name="endDate" />
          <FormikControl
            control="select"
            label="Назва валюти"
            name="currencyCode"
          />
          {/* <FormikControl
            control="select"
            label="Назва валюти"
            name="selectOption"
            options={currencies.cc}
          /> */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
