import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          <div className="row row-cols-3">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col" key={index}>
                  <a
                    href={props.photos[index].src.original}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={photo.src.landscape}
                      alt={photo.alt}
                      className="img-fluid"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
