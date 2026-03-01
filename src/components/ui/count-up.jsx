import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

export default function CountUp({
  to,
  from = 0,
  duration = 2000,
  separator = '.',
  suffix = '',
  prefix = '',
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const difference = to - from;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = from + difference * easeOut;
      setCount(Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, from, to, duration]);

  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
}
