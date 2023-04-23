import React from "react";
import "./CharacterCard.css";

export default function CharacterCard(props) {
  console.log(props);
  return (
    <div className="characterCard" style={props.styles}>
      <h5>{props.name}</h5>
      <img src={`../../../${props.photo}`} />
      <p>{props.description}</p>
    </div>
  );
}
