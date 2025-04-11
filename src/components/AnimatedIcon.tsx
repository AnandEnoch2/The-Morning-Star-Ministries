import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedIconProps {
  icon: React.ElementType;
  size?: number;
  className?: string;
  animation?: 'pulse' | 'rotate' | 'bounce';
}

const animations = {
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity
    }
  },
  rotate: {
    rotate: [0, 360],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  },
  bounce: {
    y: ["0%", "-20%", "0%"],
    transition: {
      duration: 1.5,
      repeat: Infinity
    }
  }
};

export default function AnimatedIcon({ icon: Icon, size = 24, className = '', animation = 'pulse' }: AnimatedIconProps) {
  return (
    <motion.div
      animate={animations[animation]}
      className={className}
    >
      <Icon size={size} />
    </motion.div>
  );
}