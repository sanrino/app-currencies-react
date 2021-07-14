import React from "react";

export const TextError = (props) => {
  return (
    <div className="error mt-2">
      <small>{props.children}</small>
    </div>
  );
};
