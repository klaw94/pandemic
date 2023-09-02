import React from "react";
import "./CureTracker.css";
import { nanoid } from "nanoid";

export default function CureTracker(props) {
  const visualCures = props.data.map((cure) =>
    cure.cured == true ? (
      <img key={nanoid()} className="cureImage" src={`../../${cure.photo}`} />
    ) : (
      <img key={nanoid()} className="cureImage" src={`../../nocure.png`} />
    )
  );
  return (
    <div className="cureTracker">
      <p className="cureTracker--title">Cure Tracker</p>
      <div className="cureTracker--counterDiv">{visualCures}</div>
    </div>
  );
}
