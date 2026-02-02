
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle, Scale, PenTool } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TermsOfService: React.FC = () => {
    const { t } = useLanguage();

    const sections = [
        {
            icon: CheckCircle,
            title: t('terms.section1Title'),
            content: t('terms.section1Content')
        },
        {
            icon: PenTool,
            title: t('terms.section2Title'),
            content: t('terms.section2Content')
        },
        {
            icon: AlertCircle,
            title: t('terms.section3Title'),
            content: t('terms.section3Content')
        },
        {
            icon: Scale,
            title: t('terms.section4Title'),
            content: t('terms.section4Content')
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-slate-50"
        >
            {/* Hero Section */}
            <div className="bg-[#1a0b2e] text-white pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#F36F21] rounded-full filter blur-[100px] opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#662D91] rounded-full filter blur-[80px] opacity-20 translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
                    >
                        <FileText className="w-8 h-8 text-[#F36F21]" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">{t('terms.title')}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t('terms.subtitle').replace('{year}', new Date().getFullYear().toString())}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 -mt-10 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 divide-y divide-gray-100">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="py-10 first:pt-0 last:pb-0"
                        >
                            <div className="flex gap-6 items-start">
                                <div className="hidden md:flex w-12 h-12 bg-orange-50 rounded-xl items-center justify-center text-[#F36F21] shrink-0">
                                    <section.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-[#1a0b2e] mb-4 flex items-center gap-3">
                                        <span className="md:hidden text-[#F36F21]"><section.icon className="w-5 h-5" /></span>
                                        {section.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-justify">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <div className="pt-10 mt-10 text-center">
                        <p className="text-gray-400 text-sm">
                            {t('terms.footer')}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TermsOfService;
