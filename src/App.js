import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <h1>Weather Application</h1>
        <Weather />
        <footer>
          This project was coded by Tamsyn October and is{" "}
          <a href="" target="_blank">
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
