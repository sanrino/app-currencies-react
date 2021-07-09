import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

export const Select = (props) => {
  const { name, options, ...rest } = props;
  return (
    <>
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        className="form-control"
      >
        {options.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </>
  );
};
