import React from "react";
import { Select } from "./Select";
import { DatePickerView } from "./DatePickerView";

export const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "select":
      return <Select {...rest} />;
    case "date":
      return <DatePickerView {...rest} />;
    default:
      return null;
  }
};
