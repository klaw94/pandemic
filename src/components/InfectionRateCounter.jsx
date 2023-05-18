import React from "react";
import "./InfectionRateCounter.css";

export default function InfectionRateCounter(props) {
  const visualInfectionValues = props.data.values.map((value, index) => {
    let className = index === props.data.index ? "selectedRate" : "";
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
