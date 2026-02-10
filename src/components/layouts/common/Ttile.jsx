import React from "react";

const Ttile = ({ title1, title2 }) => {
  return (
    <h2 className="font-jost text-center text-[35px]">
      {title1} <span className="font-bold">{title2}</span>
    </h2>
  );
};

export default Ttile;

