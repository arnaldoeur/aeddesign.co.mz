
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Printer } from 'lucide-react';
import GradientText from '../components/GlitchText';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/ArtistCard';
import { ServiceItem, PortfolioItem, ViewState } from '../types';

interface HomeViewProps {
    onNavigate: (view: ViewState) => void;
    onPreview: (item: ServiceItem | PortfolioItem) => void;
    services: ServiceItem[];
    portfolio: PortfolioItem[];
}

import { useLanguage } from '../context/LanguageContext';

const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onPreview, services, portfolio }) => {
    const { t } = useLanguage();

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            {/* HERO */}
            <section className="relative min-h-screen flex items-center pt-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-2 bg-purple-100 text-[#662D91] rounded-full text-sm font-bold tracking-wider mb-6 border border-purple-200">
                                {t('home.heroBadge')}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-8 text-[#662D91]">
                                {t('home.heroTitle')} <br />
                                <GradientText text={t('home.heroSubtitle')} />
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg border-l-4 border-[#F36F21] pl-6">
                                {t('home.heroDesc')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => onNavigate('services')}
                                    className="px-8 py-4 bg-[#F36F21] text-white rounded-full font-bold text-lg hover:bg-[#d85e15] transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 group"
                                >
                                    {t('home.ctaPrimary')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => onNavigate('contacts')}
                                    className="px-8 py-4 border-2 border-[#662D91] text-[#662D91] rounded-full font-bold text-lg hover:bg-[#662D91] hover:text-white transition-all flex items-center justify-center"
                                >
                                    {t('home.ctaSecondary')}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                    <div className="relative hidden lg:block h-[600px]">
                        {/* Geometric Backgrounds */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#F36F21]/20 to-[#662D91]/20 rounded-full blur-3xl z-0"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        />

                        <motion.div
                            className="absolute top-10 right-4 w-[400px] h-96 bg-[#662D91] rounded-[2rem] shadow-2xl z-10 overflow-hidden"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <img src="/images/hero-2.jpg" loading="lazy" className="w-full h-full object-cover object-center" />
                        </motion.div>
                        <motion.div
                            className="absolute top-40 right-60 w-72 h-72 bg-[#F36F21] rounded-full shadow-2xl z-20 overflow-hidden border-4 border-white"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, type: 'spring' }}
                        >
                            <img src="/images/hero-circle-update.jpg" loading="lazy" className="w-full h-full object-cover object-center" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ABOUT & VALUES */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-heading font-bold mb-6 text-[#662D91]">{t('home.aboutTitle')}</h2>
                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                {t('home.aboutDesc1')}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {t('home.aboutDesc2')}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: t('home.missionTitle'), text: t('home.missionDesc'), color: 'border-l-4 border-[#662D91] bg-[#662D91]', iconColor: 'text-[#662D91]' },
                                { title: t('home.visionTitle'), text: t('home.visionDesc'), color: 'border-l-4 border-[#F36F21] bg-[#F36F21]', iconColor: 'text-[#F36F21]' },
                                { title: t('home.valuesTitle'), text: t('home.valuesDesc'), color: 'border-l-4 border-[#1a0b2e] bg-[#1a0b2e]', iconColor: 'text-[#1a0b2e]' }
                            ].map((item, i) => (
                                <div key={i} className={`p-6 rounded-r-xl ${item.color} shadow-sm hover:shadow-xl transition-all duration-300 flex gap-4 items-start group transform hover:-translate-y-1`}>
                                    <div className="bg-white p-3 rounded-full shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className={`w-5 h-5 ${item.iconColor}`} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 text-white">{item.title}</h3>
                                        <p className="text-white/90 text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES PREVIEW */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <span className="text-[#F36F21] font-bold tracking-widest uppercase text-sm mb-2 block">{t('home.servicesSubtitle')}</span>
                            <h2 className="text-4xl font-heading font-bold mb-4 text-[#662D91]">{t('home.servicesTitle')}</h2>
                            <p className="text-gray-500 max-w-xl">{t('home.servicesDesc')}</p>
                        </div>
                        <button onClick={() => onNavigate('services')} className="hidden md:flex items-center gap-2 text-[#662D91] font-bold hover:gap-4 transition-all">
                            {t('home.ctaPrimary')} <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.slice(0, 8).map((service) => {
                            const translatedService = {
                                ...service,
                                title: t(`services.${service.id}.title`),
                                previewText: t(`services.${service.id}.preview`),
                                category: t(`services.${service.id}.category`),
                                fullDescription: t(`services.${service.id}.fullDescription`),
                                features: t(`services.${service.id}.features`)
                            };
                            return (
                                <ServiceCard
                                    key={service.id}
                                    service={translatedService}
                                    onClick={() => onPreview(translatedService)}
                                />
                            );
                        })}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <button onClick={() => onNavigate('services')} className="px-6 py-3 bg-[#662D91] text-white rounded-full font-bold shadow-lg">
                            {t('home.ctaPrimary')}
                        </button>
                    </div>
                </div>
            </section>

            {/* PORTFOLIO HIGHLIGHT */}
            <section className="py-24 bg-[#1a0b2e] text-white relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#F36F21] font-bold tracking-widest uppercase text-sm">{t('home.portfolioSubtitle')}</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">{t('home.portfolioTitle')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {portfolio.slice(0, 6).map((item) => {
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
                    </div>

                    <div className="mt-16 text-center">
                        <button
                            onClick={() => onNavigate('portfolio')}
                            className="px-10 py-4 bg-transparent border-2 border-[#F36F21] text-[#F36F21] hover:bg-[#F36F21] hover:text-white rounded-full font-bold transition-all text-lg"
                        >
                            {t('home.btnViewPortfolio')}
                        </button>
                    </div>
                </div>
            </section>

            {/* WORKFLOW (CONTRACTS PREVIEW) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 lg:max-w-[45%]">
                            <span className="text-[#662D91] font-bold tracking-widest uppercase text-sm mb-2 block">{t('home.workflowTitle')}</span>
                            <h2 className="text-4xl font-heading font-bold mb-6 text-[#662D91]">{t('home.workflowTitle')}</h2>
                            <p className="text-gray-600 mb-8 text-lg">{t('home.workflowMainDesc')}</p>

                            <div className="space-y-4">
                                {[
                                    { step: '01', title: t('home.workflowStep1'), desc: t('home.workflowDesc1') },
                                    { step: '02', title: t('home.workflowStep2'), desc: t('home.workflowDesc2') },
                                    { step: '03', title: t('home.workflowStep3'), desc: t('home.workflowDesc3') },
                                    { step: '04', title: t('home.workflowStep4'), desc: t('home.workflowDesc4') },
                                ].map((s) => (
                                    <div key={s.step} className="relative group">
                                        <div className="absolute -inset-[1.5px] bg-gradient-to-r from-[#F36F21] via-[#662D91] to-[#F36F21] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_auto] animate-gradient"></div>
                                        <div className="relative flex items-center gap-6 p-6 bg-slate-50 rounded-xl group-hover:bg-white transition-all h-full">
                                            <div className="w-12 h-12 rounded-full bg-[#F36F21]/10 flex items-center justify-center text-[#F36F21] font-bold text-xl shrink-0 group-hover:bg-[#F36F21] group-hover:text-white transition-colors duration-300">
                                                {s.step}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-[#662D91] group-hover:text-[#662D91] transition-colors">{s.title}</h4>
                                                <p className="text-sm text-gray-500">{s.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => onNavigate('contacts')}
                                className="mt-10 px-8 py-3 bg-[#662D91] text-white rounded-lg font-bold hover:bg-[#522475] transition-colors shadow-lg shadow-purple-500/20"
                            >
                                {t('home.ctaSecondary')}
                            </button>
                        </div>
                        <div className="flex-1 lg:flex-[1.3] relative hidden md:block w-full">
                            <div className="bg-gradient-to-br from-[#F36F21] to-[#662D91] p-1 rounded-2xl rotate-3 shadow-2xl h-[500px]">
                                <img src="/images/workflow-update.jpg" loading="lazy" className="rounded-xl bg-white rotate-[-3deg] w-full h-full object-cover" />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <Printer className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold">{t('home.qualityBadge')}</p>
                                    <p className="font-bold text-lg">{t('home.premiumBadge')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    ); // Added closing bracket and parenthesis for component
};

export default HomeView;
