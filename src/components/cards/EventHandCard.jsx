import React, { useState } from "react";
import "./HandCard.css";

export default function EventHandCard(props) {
  const [bigSize, setBigSize] = useState(false);

  const styles = {
    backgroundColor: props.color,
  };

  function makeBig() {
    setBigSize(!bigSize);
  }

  return (
    <div
      className={bigSize ? `characterCard big` : `characterCard small`}
      style={styles}
      onClick={makeBig}
    >
      <h5>{props.name}</h5>
      <img src={`../../../${props.photo}`} alt="" />
      <p>{props.description}</p>
    </div>
  );
}
