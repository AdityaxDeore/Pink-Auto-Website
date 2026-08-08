import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  words: string[];
  delay?: number;
}

export default function Typewriter({ words, delay = 3000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, delay);
    return () => clearInterval(interval);
  }, [words, delay]);

  return (
    <span style={{ display: 'inline-block', position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          transition={{ duration: 0.4 }}
          style={{ position: 'absolute', left: 0, whiteSpace: 'nowrap', fontStyle: 'italic', color: 'var(--color-accent)' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span style={{ opacity: 0, pointerEvents: 'none', whiteSpace: 'nowrap' }}>
        {words.reduce((a, b) => a.length > b.length ? a : b)}
      </span>
    </span>
  );
}
