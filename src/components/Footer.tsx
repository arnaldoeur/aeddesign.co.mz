
import React from 'react';
import { Facebook, Instagram, ChevronRight, MapPinned, Smartphone, AtSign } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ContactIcon from './ContactIcon';
import { LOGO_URL } from '../data';

import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    return (
        <footer className="bg-[#1a0b2e] text-white pt-16 pb-8 border-t border-purple-900/50 mt-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#662D91] rounded-full filter blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 justify-items-center md:justify-items-start">
                    <div className="col-span-1 text-center md:text-left flex flex-col items-center md:items-start">
                        <div className="mb-6 h-12">
                            <Link to="/" className="block h-full">
                                <img src={LOGO_URL} alt="AED Logo Footer" className="h-full w-auto object-contain brightness-0 invert" />
                            </Link>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                            {t('footer.slogan')}
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="https://www.facebook.com/Arson002" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#F36F21] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/aed_designcc/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#F36F21] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left w-full md:pl-10">
                        <h4 className="font-bold text-lg mb-6 text-white md:border-l-4 md:border-[#F36F21] md:pl-3 border-b-4 border-[#F36F21] md:border-b-0 pb-2 md:pb-0">{t('footer.quickLinks')}</h4>
                        <ul className="space-y-3 text-gray-400 text-sm w-full md:w-auto">
                            <li><Link to="/inicio" className="hover:text-[#F36F21] transition-colors flex items-center justify-center md:justify-start gap-2"><ChevronRight className="w-3 h-3" /> {t('nav.home')}</Link></li>
                            <li><Link to="/servicos" className="hover:text-[#F36F21] transition-colors flex items-center justify-center md:justify-start gap-2"><ChevronRight className="w-3 h-3" /> {t('nav.services')}</Link></li>
                            <li><Link to="/portifolio" className="hover:text-[#F36F21] transition-colors flex items-center justify-center md:justify-start gap-2"><ChevronRight className="w-3 h-3" /> {t('nav.portfolio')}</Link></li>
                            <li><Link to="/contactos" className="hover:text-[#F36F21] transition-colors flex items-center justify-center md:justify-start gap-2"><ChevronRight className="w-3 h-3" /> {t('nav.contacts')}</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
                        <h4 className="font-bold text-lg mb-6 text-white md:border-l-4 md:border-[#662D91] md:pl-3 border-b-4 border-[#662D91] md:border-b-0 pb-2 md:pb-0">{t('footer.contacts')}</h4>
                        <ul className="space-y-6 text-gray-400 text-sm flex flex-col items-center md:items-start w-full md:w-auto">
                            <li className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4 group">
                                <div className="shrink-0 flex justify-center w-full md:w-auto">
                                    <ContactIcon icon={MapPinned} size="sm" color="text-[#F36F21]" />
                                </div>
                                <a href="https://share.google/YeBsWHe6yQVzsVb6u" target="_blank" rel="noopener noreferrer" className="mt-1 hover:text-[#F36F21] transition-colors">
                                    Av. do Trabalho, Prédio 24<br />Ao lado da Handling<br />Lichinga, Niassa, Moçambique
                                </a>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4 group">
                                <div className="shrink-0 flex justify-center w-full md:w-auto">
                                    <ContactIcon icon={Smartphone} size="sm" color="text-[#F36F21]" />
                                </div>
                                <div className="text-center md:text-left">
                                    <a href="tel:+258873794025" className="hover:text-[#F36F21] transition-colors">+258 87 379 4025</a>
                                </div>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4 group">
                                <div className="shrink-0 flex justify-center w-full md:w-auto">
                                    <ContactIcon icon={AtSign} size="sm" color="text-[#F36F21]" />
                                </div>
                                <div className="text-center md:text-left">
                                    <a href="mailto:info@aeddesign.co.mz" className="hover:text-[#F36F21] transition-colors">info@aeddesign.co.mz</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-4 text-xs text-gray-500 text-center">
                    <p> &copy; {new Date().getFullYear()} AED Design & Serviços SU, LDA — {t('footer.rights')}</p>
                    <p className="text-gray-400">
                        {t('home.heroTitle')} <span className="text-[#F36F21] font-bold">{t('home.heroSubtitle')}</span>
                    </p>
                    <div className="flex gap-6">
                        <Link to="/privacidade" className="cursor-pointer hover:text-white">{t('footer.privacy')}</Link>
                        <Link to="/termos" className="cursor-pointer hover:text-white">{t('footer.terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
