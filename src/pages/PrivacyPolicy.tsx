
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Share2, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy: React.FC = () => {
    const { t } = useLanguage();

    const sections = [
        {
            icon: Database,
            title: t('privacyPage.section1Title'),
            content: t('privacyPage.section1Content')
        },
        {
            icon: Lock,
            title: t('privacyPage.section2Title'),
            content: t('privacyPage.section2Content')
        },
        {
            icon: Share2,
            title: t('privacyPage.section3Title'),
            content: t('privacyPage.section3Content')
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
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#662D91] rounded-full filter blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F36F21] rounded-full filter blur-[80px] opacity-10 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
                    >
                        <Shield className="w-8 h-8 text-[#F36F21]" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">{t('privacyPage.title')}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t('privacyPage.subtitle')}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 -mt-10 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                    <p className="text-gray-600 mb-12 text-lg leading-relaxed text-center max-w-2xl mx-auto border-b border-gray-100 pb-12">
                        {t('privacyPage.intro')}
                    </p>

                    <div className="grid gap-8">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-6 items-start group"
                            >
                                <div className="hidden md:flex w-12 h-12 bg-purple-50 rounded-xl items-center justify-center text-[#662D91] group-hover:bg-[#662D91] group-hover:text-white transition-colors shrink-0">
                                    <section.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1a0b2e] mb-3 flex items-center gap-3">
                                        <span className="md:hidden text-[#662D91]"><section.icon className="w-5 h-5" /></span>
                                        {section.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed bg-slate-50 p-6 rounded-xl border border-gray-100 group-hover:border-purple-100 transition-colors">
                                        {section.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-[#F36F21]/5 rounded-xl border border-[#F36F21]/10 flex items-center gap-4">
                        <div className="p-3 bg-white rounded-full shadow-sm text-[#F36F21]">
                            <Eye className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#1a0b2e]">{t('privacyPage.transparencyTitle')}</h4>
                            <p className="text-sm text-gray-600">{t('privacyPage.transparencyDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy;
