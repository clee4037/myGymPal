import React from "react";
import LogLeft from "./LogLeft";
import LogRight from "./LogRight";

const LogHeader = () => {
  return (
    <div className="flex flex-row justify-between pl-5 pr-5 items-center">
      <LogLeft />
      <LogRight />
    </div>
  );
};

export default LogHeader;
