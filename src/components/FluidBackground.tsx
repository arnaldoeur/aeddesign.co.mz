/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';

const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      
      {/* Brand Orange Blob */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-[#F36F21] rounded-full mix-blend-multiply filter blur-[80px] opacity-10 will-change-transform"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Brand Purple Blob */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-[#662D91] rounded-full mix-blend-multiply filter blur-[80px] opacity-10 will-change-transform"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Accent Light Blob */}
      <motion.div
        className="absolute top-[40%] left-[30%] w-[50vw] h-[50vw] bg-purple-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-20 will-change-transform"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(102,45,145,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(102,45,145,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </div>
  );
};

export default FluidBackground;