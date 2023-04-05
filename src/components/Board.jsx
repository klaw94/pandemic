import { useState, useEffect, useRef } from "react";
import { StraightLine, LineL } from "react-drawline";
import countries from "../data/countries";
import lines from "../data/lines";

export default function Board() {
  // const styles = {left: }
  let visualCountries = countries.map((country) => {
    const stylesDiv = { left: country.left, top: country.top };
    const styleKnop = { backgroundColor: country.color };
    const stylesName = { left: country.left, top: country.top };
    return (
      <div className="countryDiv" style={stylesDiv}>
        <div key={country.name} className="country" style={styleKnop}>
          {" "}
          C{" "}
        </div>
        <div className="countryName" style={stylesName}>
          {country.name}
        </div>
      </div>
    );
  });

  let visualLines = lines.map((line) => {
    return (
      <svg>
        <line
          x1={line.begin[0]}
          y1={line.begin[1]}
          x2={line.lineTo[0]}
          y2={line.lineTo[1]}
          stroke={line.color}
        ></line>
      </svg>
    );
  });

  return (
    <div className="board">
      {visualCountries}
      {visualLines}
    </div>
  );
}
