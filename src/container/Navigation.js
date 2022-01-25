import { useState } from "react";
import "../styles/Navigation.css";

export default function Navigation(props) {
  return (
    <div className="nav">
      <div className="nav-grid">
        <span
          className={props.menu === 0 ? "nav-item active" : "nav-item"}
          onClick={() => {
            props.setMenu(0);
          }}
        >
          INPUT
        </span>
        <span
          className={props.menu === 1 ? "nav-item active" : "nav-item"}
          onClick={() => {
            props.setMenu(1);
          }}
        >
          OUTPUT
        </span>
        <span
          className={props.menu === 2 ? "nav-item active" : "nav-item"}
          onClick={() => {
            props.setMenu(2);
          }}
        >
          CONSOLE IN
        </span>
        <span
          className={props.menu === 3 ? "nav-item active" : "nav-item"}
          onClick={() => {
            props.setMenu(3);
          }}
        >
          CONSOLE OUT
        </span>
      </div>
    </div>
  );
}
