import React from "react";
import { Field, ErrorMessage } from "formik";
import { registerLocale } from "react-datepicker";

import TextError from "./TextError";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerView = (props) => {
  registerLocale("ru", ru);
  const { label, name, ...rest } = props;
  const dateNow = new Date();
  const minDate = new Date(1997, 1, 1);
  return (
    <>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
              dateFormat="P"
              locale="ru"
              className="form-control"
              maxDate={dateNow}
              minDate={minDate}
              style={{ width: "100%" }}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </>
  );
};
