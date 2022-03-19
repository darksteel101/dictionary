import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="-blank">
        Listen
      </a>
      {props.phonetic.text}
    </div>
  );
}
