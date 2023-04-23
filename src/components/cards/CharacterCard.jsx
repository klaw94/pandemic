import React from "react";
import "./CharacterCard.css";

export default function CharacterCard(props) {
  const styles = {
    // borderBottom: `20px solid ${props.color}`,
    backgroundColor: props.color,
    // borderRight: `20px solid ${props.color}`,
  };
  console.log(props);
  return (
    <div className="characterCard" style={styles}>
      <h5>{props.name}</h5>
      <img src={`../../../${props.photo}`} alt="" />
      <p>{props.description}</p>
    </div>
  );
}
