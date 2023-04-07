import { useState, useEffect } from "react";
import blackcube from "../assets/blackcube.jpg";
import bluecube from "../assets/bluecube.jpg";
import redcube from "../assets/redcube.png";
import yellowcube from "../assets/yellowcube.jpg";
import researchCenter from "../assets/hospital.png";

export default function Country(props) {
  const cubes = [{ color: "blue" }, { color: "blue" }];

  const visualCubes = cubes.map((cube) => {
    return <img className="cubes" src={redcube} />;
  });

  return (
    <div className="countryDiv" style={props.stylesDiv}>
      <div className="country" style={props.styleKnop}>
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
    </div>
  );
}
