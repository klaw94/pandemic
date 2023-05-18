import React from "react";
import "./OutbreaksTracker.css";

export default function OutbreaksTracker(props) {
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const visualValues = values.map((value) => {
    const styles = value % 2 == 0 ? { left: 20 } : { left: 40 };

    return value != 8 ? (
      <div className="outbreakTracker--diamond" style={styles}>
        {value}
      </div>
    ) : (
      <div className="outbreakTracker--diamond" style={styles}>
        💀
      </div>
    );
  });

  return (
    <div className="outbreakTracker">
      <p className="outbreakTracker--title">Outbreaks</p>
      <div className="outbreakTracker--counterDiv">{visualValues}</div>
    </div>
  );
}
