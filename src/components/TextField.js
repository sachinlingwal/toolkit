import React from "react";

const TextField = ({ label, onChange, inputProps, value }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        value={value}
        style={{
          background: "#f0f0f0",
          border: "none",
          padding: "0.5em 2em",
        }}
      />
    </div>
  );
};

export default TextField;
