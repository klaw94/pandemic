import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import blackcube from "../assets/blackcube.png";
import bluecube from "../assets/bluecube.png";
import redcube from "../assets/redcube.png";
import yellowcube from "../assets/yellowcube.png";
import researchCenter from "../assets/hospital.png";

export default function Country(props) {
  const cubes = [{ color: "blue" }, { color: "blue" }, { color: "blue" }];

  const visualCubes = cubes.map((cube) => {
    //switch to link color with cube
    let visualCube;
    switch (cube.color) {
      case "blue":
        visualCube = bluecube;
        break;
      case "black":
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
