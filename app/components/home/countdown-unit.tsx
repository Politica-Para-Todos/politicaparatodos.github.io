import React from "react";
import { zeroPad } from "react-countdown-now";

const CountdownUnit = ({ label, value }: any) =>
  <div className="countdown-unit">
    <div className="countdown-unit-value">{zeroPad(value, 2)}</div>
    <div className="countdown-unit-label">{label}</div>
  </div>

export default CountdownUnit;
