import React from "react";
import "./CureTracker.css";

export default function CureTracker(props) {
  const visualCures = props.data.map((cure) =>
    cure.cured == true ? (
      <img className="cureImage" src={`../../${cure.photo}`} />
    ) : (
      <img className="cureImage" src={`../../nocure.png`} />
    )
  );
  return (
    <div className="cureTracker">
      <p className="cureTracker--title">Cure Tracker</p>
      <div className="cureTracker--counterDiv">{visualCures}</div>
    </div>
  );
}
