
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Printer, ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { ServiceItem, ProductItem, ViewState } from '../types';

interface ServicesViewProps {
    onNavigate: (view: ViewState) => void;
    onPreview: (item: ServiceItem) => void;
    services: ServiceItem[];
    products: ProductItem[];
}

import { useLanguage } from '../context/LanguageContext';

const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, onPreview, services, products }) => {
    const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
    const { t } = useLanguage();

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {/* Header */}
            <div className="bg-[#1a0b2e] text-white py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://backup.aegraphics.in/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-07-at-15.11.43.jpeg')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="text-[#F36F21] font-bold tracking-widest uppercase text-sm mb-4 block">{t('services.heading')}</span>
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('services.title').replace('AED Design', '<span class="text-[#F36F21]">AED Design</span>') }} />
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('services.description')}
                    </p>
                    <div className="mt-8">
                        <button
                            onClick={() => onNavigate('contacts')}
                            className="px-8 py-3 bg-[#F36F21] text-white rounded-full font-bold shadow-lg hover:bg-[#d85e15] transition-colors"
                        >
                            {t('modal.requestQuote')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Services Grid */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service) => {
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
            </div>

            {/* Products Section */}
            <div className="bg-slate-100 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-[#662D91]">{t('products.title')}</h2>
                            <p className="text-gray-500">{t('products.subtitle')}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <div key={product.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                                    <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-[#662D91] mb-4 group-hover:bg-[#662D91] group-hover:text-white transition-colors">
                                        <Printer className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2 text-[#662D91]">{t(`products.items.${product.id}.name`)}</h3>
                                    <p className="text-gray-500 text-sm mb-4">{t(`products.items.${product.id}.description`)}</p>
                                    <button
                                        onClick={() => {
                                            const productName = t(`products.items.${product.id}.name`);
                                            const message = encodeURIComponent(t('products.chatMessage').replace('{product}', productName));
                                            window.open(`https://wa.me/258846109582?text=${message}`, '_blank');
                                        }}
                                        className="text-[#F36F21] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                                    >
                                        {t('common.readMore')} <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="py-20 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-heading font-bold mb-8 text-center text-[#662D91]">{t('faq.title')}</h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="border border-gray-200 rounded-lg p-6 hover:border-[#662D91] transition-colors bg-white">
                            <h4 className="font-bold text-lg mb-2 text-[#662D91]">{t(`faq.q${i}`)}</h4>
                            <p className="text-gray-600">{t(`faq.a${i}`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ServicesView;
