// Countdown timer for auctions
import React, { useEffect, useState } from 'react';

function Countdown({ endTime }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = new Date(endTime) - now;

      if (diff <= 0) {
        setTimeLeft('00:00');
        clearInterval(interval);
        return;
      }

      const mins = Math.floor(diff / 60000);
      const secs = Math.floor((diff % 60000) / 1000);

      setTimeLeft(
        (mins < 10 ? '0' : '') + mins + ':' +
        (secs < 10 ? '0' : '') + secs
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return <div style={{ fontWeight: 'bold' }}>{timeLeft}</div>;
}

export default Countdown;
