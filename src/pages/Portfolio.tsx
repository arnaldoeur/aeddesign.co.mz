
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Filter } from 'lucide-react';
import Card from '../components/ArtistCard';
import { PortfolioItem } from '../types';

interface PortfolioViewProps {
    portfolio: PortfolioItem[];
    onPreview: (item: PortfolioItem) => void;
}

import { useLanguage } from '../context/LanguageContext';

const CATEGORIES = ['TODOS', 'BRANDING', 'MARKETING DIGITAL', 'SINALIZAÇÃO', 'EVENTOS', 'OFFICE & BRINDES'];

const CATEGORY_TRANSLATION_KEYS: Record<string, string> = {
    'TODOS': 'portfolio.categories.all',
    'BRANDING': 'portfolio.categories.branding',
    'MARKETING DIGITAL': 'portfolio.categories.digitalMarketing',
    'SINALIZAÇÃO': 'portfolio.categories.signage',
    'EVENTOS': 'portfolio.categories.events',
    'OFFICE & BRINDES': 'portfolio.categories.officeGifts'
};

const PortfolioView: React.FC<PortfolioViewProps> = ({ portfolio, onPreview }) => {
    const [activeCategory, setActiveCategory] = useState('TODOS');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const { t } = useLanguage();

    const filteredPortfolio = activeCategory === 'TODOS'
        ? portfolio
        : portfolio.filter(item => item.category === activeCategory);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-[#1a0b2e] text-white py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://backup.aegraphics.in/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-07-at-15.11.39.jpeg')] bg-cover bg-center opacity-20"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <span className="text-[#F36F21] font-bold tracking-widest uppercase text-sm mb-4 block">{t('nav.portfolio')}</span>
                    <h1 className="text-5xl font-heading font-bold mb-6 text-white">{t('portfolio.pageTitlePrefix')} <span className="text-[#F36F21]">{t('portfolio.pageTitleHighlight')}</span></h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">{t('portfolio.pageSubtitle')}</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row justify-center items-center mb-12 gap-6">
                    {/* Filter Dropdown (Mobile) & List (Desktop) */}
                    <div className="relative z-20">
                        <button
                            className="md:hidden flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-sm font-bold"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <Filter className="w-4 h-4" />
                            {t(CATEGORY_TRANSLATION_KEYS[activeCategory] || activeCategory)}
                            <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {(isFilterOpen || window.innerWidth >= 768) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className={`${isFilterOpen ? 'absolute top-full right-0 mt-2 bg-white shadow-xl rounded-xl p-2 min-w-[200px]' : 'hidden md:flex bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-gray-200'}`}
                                >
                                    {CATEGORIES.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => {
                                                setActiveCategory(cat);
                                                setIsFilterOpen(false);
                                            }}
                                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeCategory === cat
                                                ? 'bg-[#662D91] text-white shadow-md'
                                                : 'text-gray-500 hover:text-[#662D91] hover:bg-white'
                                                }`}
                                        >
                                            {t(CATEGORY_TRANSLATION_KEYS[cat] || cat)}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredPortfolio.map((item) => {
                            const translatedItem = {
                                ...item,
                                title: t(`portfolio.${item.id}.title`),
                                category: t(`portfolio.${item.id}.category`)
                            };
                            return (
                                <Card
                                    key={item.id}
                                    image={item.image}
                                    title={translatedItem.title}
                                    category={translatedItem.category}
                                    variant="portfolio"
                                    onClick={() => onPreview(translatedItem)}
                                />
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PortfolioView;
