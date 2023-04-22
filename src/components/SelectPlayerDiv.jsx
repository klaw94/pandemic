import { useState, useEffect, useRef } from "react";
import "./SettingsPopUp.css";

export default function SelectPlayerDiv(props) {
  return (
    <div className="selectPlayerDiv">
      <h1>{props.title}</h1>
      <button>+</button>
    </div>
  );
}
