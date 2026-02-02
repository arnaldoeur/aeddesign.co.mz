
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, LucideIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServiceCardProps {
    service: {
        id: string;
        title: string;
        category: string;
        previewText: string;
        icon?: LucideIcon;
        image?: string; // Kept for type compatibility but not used
        features?: string[];
    };
    onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
    const Icon = service.icon || CheckCircle;
    const { t } = useLanguage();

    return (
        <motion.div
            key={service.id}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="rounded-2xl relative group h-full flex flex-col justify-between"
            onClick={onClick}
        >

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group-hover:border-transparent relative h-full flex flex-col justify-between z-10">

                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                    {/* Header: Icon & Category */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center text-[#662D91] group-hover:bg-[#662D91] group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110 transform origin-left">
                            <Icon className="w-7 h-7" />
                        </div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest rounded-full group-hover:bg-[#F36F21] group-hover:text-white transition-colors duration-300">
                            {service.category}
                        </span>
                    </div>


                    {/* Content */}
                    <h3 className="text-xl font-heading font-bold text-[#662D91] mb-3 group-hover:text-[#662D91] transition-colors leading-tight">
                        {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-600">
                        {service.previewText}
                    </p>
                </div>

                {/* Footer: Action */}
                <div className="relative z-10 mt-auto pt-4 border-t border-gray-50/50 flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#662D91] group-hover:text-[#F36F21] transition-colors uppercase tracking-wide">
                        {t('common.readMore')}
                    </span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#F36F21] transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                        <ArrowRight className="w-5 h-5" strokeWidth={3} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
