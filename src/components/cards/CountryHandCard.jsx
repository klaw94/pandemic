import React from "react";
import "./HandCard.css";
import { EnumCardTypes } from "../../data/handCards";
import { useState } from "react";

export default function CountryHandCard(props) {
  const styles = {
    backgroundImage: `url(/${props.card.photo})`,
    backgroundColor: `${props.card.color}`,
  };
  const nameSize = props.card.name.length > 9 ? "smallTitle" : "";

  const backgroundStyle = { backgroundColor: `${props.card.color}` };

  return (
    <div className={`handCard countryHandCard`} style={styles}>
      <div className="h5Div" style={backgroundStyle}>
        <h5 className={nameSize}>{props.card.name}</h5>
      </div>
      {props.card.type === EnumCardTypes.Event && (
        <div className="handCard-text">{props.card.text}</div>
      )}
      {props.card.type !== EnumCardTypes.Event && (
        <div className="footerDiv" style={backgroundStyle}></div>
      )}
    </div>
  );
}
