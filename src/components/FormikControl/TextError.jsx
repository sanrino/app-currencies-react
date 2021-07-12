import React from "react";

function TextError(props) {
  return (
    <div className="error mt-2">
      <small>{props.children}</small>
    </div>
  );
}

export default TextError;
