import React from "react";
import "./Phonetic";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <p>{props.phonetic.text}</p>
    </div>
  );
}
