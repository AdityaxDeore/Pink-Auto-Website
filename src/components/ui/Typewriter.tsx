import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  words: string[];
  delay?: number;
}

export default function Typewriter({ words, delay = 2000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, delay);
    return () => clearInterval(timer);
  }, [words, delay]);

  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b));

  return (
    <span
      style={{
        display: 'inline-block',
        position: 'relative',
        perspective: '1000px',
        verticalAlign: 'bottom',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 35,
            rotateX: -75,
            filter: 'blur(6px)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
          }}
          exit={{
            opacity: 0,
            y: -35,
            rotateX: 75,
            filter: 'blur(6px)',
          }}
          transition={{
            type: 'spring',
            stiffness: 140,
            damping: 15,
            mass: 0.8,
          }}
          style={{
            display: 'inline-block',
            position: 'absolute',
            left: 0,
            whiteSpace: 'nowrap',
            fontStyle: 'italic',
            color: 'var(--color-accent)',
            transformOrigin: '50% 50% -20px',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible placeholder for preserving container dimensions */}
      <span
        style={{
          opacity: 0,
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          fontStyle: 'italic',
          display: 'inline-block',
        }}
      >
        {longestWord}
      </span>
    </span>
  );
}
