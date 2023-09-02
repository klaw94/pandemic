import React from "react";
import "./InfectionRateCounter.css";
import { nanoid } from "nanoid";

export default function InfectionRateCounter(props) {
  const visualInfectionValues = props.data.values.map((value, index) => {
    let className = index === props.data.index ? "selectedRate" : "";
    return (
      <div key={nanoid()} className="infectionRateCounter--counter">
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
