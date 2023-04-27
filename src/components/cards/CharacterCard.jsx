import { useState } from "react";
import "./CharacterCard.css";

export default function CharacterCard(props) {
  const styles = {
    backgroundColor: props.color,
  };

  return (
    <div
      className={`characterCard ${props.className}`}
      style={styles}
      onClick={props.handleClick}
    >
      <h5>{props.name}</h5>
      <img src={`../../../${props.photo}`} alt="" />
      <p>{props.description}</p>
    </div>
  );
}
