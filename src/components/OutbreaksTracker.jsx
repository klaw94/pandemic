import React from "react";
import "./OutbreaksTracker.css";

export default function OutbreaksTracker(props) {
  const visualValues = props.data.values.map((value, index) => {
    const styles = value % 2 == 0 ? { left: 20 } : { left: 40 };
    let className = index === props.data.index ? "selectedRate" : "";
    return value != 8 ? (
      <div className={`outbreakTracker--diamond ${className}`} style={styles}>
        {value}
      </div>
    ) : (
      <div className={`outbreakTracker--diamond ${className}`} style={styles}>
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
