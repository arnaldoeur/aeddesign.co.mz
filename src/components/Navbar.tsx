
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { LOGO_URL } from '../data';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { lang, toggleLang, t } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: t('nav.home'), path: '/inicio' },
        { label: t('nav.services'), path: '/servicos' },
        { label: t('nav.portfolio'), path: '/portifolio' },
        { label: t('nav.contacts'), path: '/contactos' }
    ];

    const handleMobileNav = (path: string) => {
        navigate(path);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-lg border-b border-gray-100 transition-all duration-300 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    <div
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => navigate('/inicio')}
                    >
                        <div className="relative h-7 md:h-8 w-auto overflow-hidden">
                            <img
                                src={LOGO_URL}
                                alt="AED Design e Serviços SU, LDA"
                                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path || (item.path === '/inicio' && location.pathname === '/');
                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive: linkActive }) =>
                                        `relative py-1 transition-colors hover:text-[#F36F21] ${linkActive ? 'text-[#662D91] font-bold' : 'text-gray-600'}`
                                    }
                                >
                                    {item.label}
                                    {isActive && (
                                        <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#662D91]" />
                                    )}
                                </NavLink>
                            );
                        })}
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <img
                                src={lang === 'pt' ? 'https://flagcdn.com/w40/mz.png' : 'https://flagcdn.com/w40/us.png'}
                                alt={lang === 'pt' ? 'MZ Flag' : 'US Flag'}
                                className="w-6 h-auto rounded-sm object-cover"
                            />
                            <span className="font-bold text-xs text-gray-700">{lang === 'pt' ? 'PT' : 'EN'}</span>
                        </button>
                        <a
                            href="https://wa.me/258846109582"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-gradient-to-r from-[#F36F21] to-[#662D91] hover:from-[#d85e15] hover:to-[#522475] text-white rounded-full font-bold shadow-lg shadow-purple-500/20 transition-all hover:scale-105 flex items-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" /> {t('nav.whatsapp')}
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-[#1a0b2e] z-50 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 20 }}
                        className="fixed inset-0 z-30 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.path}
                                onClick={() => handleMobileNav(item.path)}
                                className="text-3xl font-heading font-bold text-[#1a0b2e] hover:text-[#F36F21] transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-2 px-6 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-xl"
                        >
                            <span>{lang === 'pt' ? '🇲🇿' : '🇺🇸'}</span>
                            <span className="font-bold text-gray-700">{lang === 'pt' ? 'PT' : 'EN'}</span>
                        </button>

                        <button
                            onClick={() => handleMobileNav('/contactos')}
                            className="mt-2 px-10 py-4 bg-[#662D91] text-white text-lg rounded-full font-bold shadow-xl"
                        >
                            {t('nav.contactBtn')}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
