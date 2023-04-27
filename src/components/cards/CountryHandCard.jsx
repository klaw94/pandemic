import React from "react";
import "./HandCard.css";

export default function CountryHandCard(props) {
  const styles = {
    backgroundImage: `url(/${props.card.photo})`,
    backgroundColor: `${props.card.color}`,
  };
  const backgroundStyle = { backgroundColor: `${props.card.color}` };

  console.log(props.card.color);

  return (
    <div className="handCard countryHandCard" style={styles}>
      <div className="h5Div" style={backgroundStyle}>
        <h5>{props.card.name}</h5>
      </div>
      <div className="footerDiv" style={backgroundStyle}></div>
    </div>
  );
}
