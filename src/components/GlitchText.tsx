/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text, as: Component = 'span', className = '' }) => {
  return (
    <Component className={`relative inline-block font-bold tracking-tight isolate pb-1 ${className}`}>
      {/* Main Gradient Text */}
      <motion.span
        className="absolute inset-0 z-10 block bg-gradient-to-r from-[#F36F21] via-[#662D91] to-[#F36F21] bg-[length:200%_auto] bg-clip-text text-transparent will-change-[background-position]"
        animate={{
          backgroundPosition: ['0% center', '200% center'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        aria-hidden="true"
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {text}
      </motion.span>

      {/* Base layer */}
      <span
        className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F36F21] to-[#662D91] opacity-50"
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        {text}
      </span>
    </Component>
  );
};

export default GradientText;