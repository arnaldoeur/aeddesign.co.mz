/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CardProps {
  image: string;
  title: string;
  category: string;
  description?: string;
  onClick: () => void;
  variant?: 'service' | 'portfolio';
}

const Card: React.FC<CardProps> = ({ image, title, category, description, onClick, variant = 'service' }) => {
  const { t } = useLanguage();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      className="group relative w-full rounded-2xl cursor-pointer h-full outline-offset-4 focus:outline-none focus:ring-4 focus:ring-[#F36F21]/50"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      animate="rest"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${t('common.viewDetails')} ${title}`}
    >

      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/5 hover:shadow-black/10 border border-gray-100 group-hover:border-transparent">
        {/* Image Container */}
        <div className={`relative overflow-hidden ${variant === 'service' ? 'h-48' : 'h-64'}`}>
          <motion.img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover will-change-transform"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 }
            }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e]/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="text-[10px] font-bold tracking-widest uppercase bg-white/90 text-[#662D91] px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-heading text-xl font-bold text-[#662D91] group-hover:text-[#F36F21] transition-colors">
              {title}
            </h3>
            <motion.div
              variants={{
                rest: { x: 0, opacity: 0.5 },
                hover: { x: 5, opacity: 1, color: '#F36F21' }
              }}
            >
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </motion.div>
          </div>

          {description && (
            <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>

      </div>
    </motion.div>
  );
};

export default Card;