import React from "react";

import { Field, ErrorMessage } from "formik";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";

import { TextError } from "./TextError";

export const DatePickerView = (props) => {
  registerLocale("ru", ru);
  const { label, name, ...rest } = props;
  const dateNow = new Date();
  const minDate = new Date(1997, 1, 1);

  const datepickerStyle = {
    width: "100%",
  };

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
              style={datepickerStyle}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </>
  );
};
