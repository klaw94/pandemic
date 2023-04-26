import React from "react";
import "./CharacterCard.css";

export default function CharacterCard(props) {
  const [zoomed, setZoomed] = useState(false);
  //maybe we can get a className for the size in the props.
  //OnClick Selected
  //Selected means speciaStyles with shade.
  //It also send info to the parent.

  const styles = {
    backgroundColor: props.color,
  };

  function zoomIn() {
    setZoomed((prevValue) => !prevValue);
  }

  return (
    <div
      className={zoomed ? `characterCard` : `characterCard ${props.className}`}
      style={styles}
      onClick={propsHandleClick}
    >
      <h5>{props.name}</h5>
      <img src={`../../../${props.photo}`} alt="" />
      <p>{props.description}</p>
    </div>
  );
}
