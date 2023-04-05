import { useState, useEffect, useRef } from "react";
import countries from "../data/countries";
import { nanoid } from "nanoid";
import lines from "../data/lines";
import ferries from "../data/ferries";

export default function Board() {
  let visualCountries = countries.map((country) => {
    const stylesDiv = { left: country.left, top: country.top };
    const styleKnop = { backgroundColor: country.color };
    const stylesName = { left: country.left, top: country.top };
    return (
      <div key={nanoid()} className="countryDiv" style={stylesDiv}>
        <div className="country" style={styleKnop}>
          {" "}
          C{" "}
        </div>
        <div className="countryName" style={stylesName}>
          {country.name}
        </div>
      </div>
    );
  });

  let visualMapLines = lines.map((line) => {
    return (
      <svg key={nanoid()}>
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

  let visualLines = countries.map((country) => {
    return country.connections.map((conName) => {
      let connectedCountry = countries.find((c) => c.name === conName);
      let connectedFerry = ferries.find((f) => f.name === conName);
      return (
        <svg key={nanoid()}>
          <line
            x1={country.left + 10}
            y1={country.top + 10}
            x2={
              connectedFerry ? connectedFerry.left : connectedCountry.left + 10
            }
            y2={connectedFerry ? connectedFerry.top : connectedCountry.top + 10}
            stroke={"AntiqueWhite"}
          ></line>
        </svg>
      );
    });
  });

  let visualFerries = ferries.map((ferry) => {
    const stylesName = {
      position: "absolute",
      left: ferry.left > 0 ? ferry.left - 40 : ferry.left,
      top: ferry.top,
    };
    return (
      <div key={nanoid()} className="ferryDiv" style={stylesName}>
        {ferry.text}
      </div>
    );
  });
  return (
    <div className="board">
      {visualCountries}
      {visualLines}
      {visualMapLines}
      {visualFerries}
    </div>
  );
}
