// install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
import MainComponent from "./component/MainComponent/MainComponent";
import "normalize.css/normalize.css";
import "./styles/styles1.scss";

ReactDOM.render(<MainComponent />, document.getElementById("app"));
