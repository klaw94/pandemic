import { useState, useEffect, useRef } from "react";
import "./SelectPlayerDiv.css";

export default function SelectPlayerDiv(props) {
  return (
    <div className="selectPlayerDiv">
      <h3>{props.title}</h3>
      <button>+</button>
    </div>
  );
}
