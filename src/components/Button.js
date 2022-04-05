import React from "react";

const Button = ({ onclick, children, buttonProps }) => {
  return (
    <button
      {...buttonProps}
      style={{
        padding: "0.5em 2em",
        margin: "1em 0",
      }}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
