import { useEffect, useState } from "react";

function CountdownTimer({ seconds, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete && onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onComplete]);

  const format = (s) => {
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}:${r < 10 ? "0" + r : r}`;
  };

  return <div className="countdown">{format(timeLeft)}</div>;
}

export default CountdownTimer;
