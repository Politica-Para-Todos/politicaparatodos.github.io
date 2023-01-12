import CountdownUnit from "./countdown-unit";

export interface CountdownRendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownRenderer = ({ days, hours, minutes, seconds }: CountdownRendererProps) =>
  <div className="countdown-container">
    <CountdownUnit label="Dias" value={days} />
    <span className="countdown-unit-separator">:</span>
    <CountdownUnit label="Horas" value={hours} />
    <span className="countdown-unit-separator">:</span>
    <CountdownUnit label="Minutos" value={minutes} />
    <span className="countdown-unit-separator">:</span>
    <CountdownUnit label="Segundos" value={seconds} />
  </div>

export default CountdownRenderer;
