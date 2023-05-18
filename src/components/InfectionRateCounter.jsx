import React, { useState } from "react";
import "./InfectionRateCounter.css";

export default function InfectionRateCounter(props) {
  const [values, setValues] = useState([2, 2, 2, 3, 3, 4, 4]);

  const visualInfectionValues = values.map((value, index) => {
    let className = index === props.infectionRateCounter ? "selectedRate" : "";
    return (
      <div className="infectionRateCounter--counter">
        <div className={`infectionRateCounter--circle ${className}`}></div>
        <p className="infectionRateCounter--number">{value}</p>
      </div>
    );
  });

  return (
    <div className="infectionRateCounter">
      <div className="infectionRateCounter--counterDiv">
        {visualInfectionValues}
      </div>
      <p className="infectionRateCounter--title">Infection Rate</p>
    </div>
  );
}
