import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definition-block">
            <ul>
              <li>{definition.definition}</li>
              <p className="definition-example">
                <em>{definition.example}</em>
              </p>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
