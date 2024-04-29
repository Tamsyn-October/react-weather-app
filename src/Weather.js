import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>

      <div className="row">
        <div className="col=6">
          <img src="#" alt="Mostly cloudy" />
          6℃
        </div>
        <div className="col-6">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
