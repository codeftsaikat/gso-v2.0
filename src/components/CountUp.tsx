import { useInView } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

// Easing function for smooth animation (easeOutCubic)
const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });
  const animationRef = useRef<number | null>(null);

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  // Set initial value
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  // Animation effect
  useEffect(() => {
    if (!isInView || !startWhen) {
      return;
    }

    const startValue = direction === 'down' ? to : from;
    const endValue = direction === 'down' ? from : to;
    const range = endValue - startValue;

    // Call onStart callback
    if (typeof onStart === 'function') {
      onStart();
    }

    let startTime: number | null = null;
    let hasEnded = false;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = (timestamp - startTime) / 1000; // Convert to seconds
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = startValue + range * easedProgress;

      if (ref.current) {
        ref.current.textContent = formatValue(currentValue);
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else if (!hasEnded) {
        hasEnded = true;
        // Call onEnd callback
        if (typeof onEnd === 'function') {
          onEnd();
        }
      }
    };

    const timeoutId = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, startWhen, direction, from, to, delay, duration, onStart, onEnd, formatValue]);

  return <span className={className} ref={ref} />;
}
