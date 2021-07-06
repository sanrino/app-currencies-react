import React from "react";
import DateView from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import { registerLocale } from "react-datepicker";

import TextError from "./TextError";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerView = (props) => {
  registerLocale("ru", ru);
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
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
              dateFormat="d MMMM, yyyy"
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
