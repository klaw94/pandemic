import React from "react";
import "./CharacterCard.css";

export default function CharacterCard(props) {
  //maybe we can get a className for the size in the props.
  //OnClick Selected
  //Selected means speciaStyles with shade.
  //It also send info to the parent.

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
