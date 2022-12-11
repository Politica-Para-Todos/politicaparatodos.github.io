import CountdownUnit from "./countdown-unit";

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const CountdownRenderer = (countdown: Countdown) => {
  return (
    <div className="countdown-container">
      <CountdownUnit label="Dias" value={countdown.days} />
      <span className="countdown-unit-separator">:</span>
      <CountdownUnit label="Horas" value={countdown.hours} />
      <span className="countdown-unit-separator">:</span>
      <CountdownUnit label="Minutos" value={countdown.minutes} />
      <span className="countdown-unit-separator">:</span>
      <CountdownUnit label="Segundos" value={countdown.seconds} />
    </div>
  );
};

export default CountdownRenderer;
