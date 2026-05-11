import { motion, useScroll, useSpring } from 'framer-motion';
import type { HTMLAttributes } from 'react';

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: 'easeOut' as const, delay },
  }),
};

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function Reveal({ children, className, delay = 0, style }: RevealProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={item}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className, style }: HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, style }: HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={item}
      custom={0}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
        transformOrigin: '0%',
        scaleX,
        zIndex: 50,
      }}
    />
  );
}
