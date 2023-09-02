import { useState, useEffect } from "react";
import "./Country.css";
import { nanoid } from "nanoid";
import blackcube from "../assets/blackcube.png";
import bluecube from "../assets/bluecube.png";
import redcube from "../assets/redcube.png";
import yellowcube from "../assets/yellowcube.png";
import researchCenter from "../assets/hospital.png";
import EnumCountries from "../data/enumCountries";

export default function Country(props) {
  let highlightedClass = props.country.highlighted ? "highlightedCountry" : "";

  const visualCubes = props.country.infectionCubes.map((cube) => {
    //switch to link color with cube
    let visualCube;
    switch (cube.color) {
      case "blue":
        visualCube = bluecube;
        break;
      case "black":
      case "white":
        visualCube = blackcube;
        break;
      case "yellow":
        visualCube = yellowcube;
        break;
      case "red":
        visualCube = redcube;
        break;
    }

    return <img key={nanoid()} className="cubes" src={visualCube} />;
  });
  const visualPawns = props.country.players.map((pawn) => (
    <img key={nanoid()} className="pawnInCountry" src={`./../../${pawn}`} />
  ));

  return (
    <div
      className="countryDiv"
      style={props.stylesDiv}
      onClick={() => props.handleClick(props.country)}
    >
      {props.country.isDestination && (
        <div className="country-tooltip">
          <div>Do you want to move to {props.country.name}?</div>
          <div>
            <button onClick={(e) => props.confirmMovement(props.country)}>
              Yes
            </button>
            <button>No</button>
          </div>
        </div>
      )}
      <div className={`country ${highlightedClass}`} style={props.styleKnop}>
        {" "}
        C{" "}
      </div>
      <div className="countryName" style={props.stylesName}>
        {props.country.name}
      </div>
      <div className="researchCenter-div">
        {props.country.researchCenter && (
          <img className="researchCenter-img" src={researchCenter} />
        )}
      </div>
      <div className="countryVirus-div">{visualCubes}</div>
      <div className="countryPawn-div">{visualPawns}</div>
    </div>
  );
}
