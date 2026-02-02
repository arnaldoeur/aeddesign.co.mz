
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactIconProps {
    icon: LucideIcon;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
}

const ContactIcon: React.FC<ContactIconProps> = ({ icon: Icon, color = 'text-[#662D91]', size = 'md' }) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12'
    };

    const iconSizes = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6'
    };

    return (
        <div className={`${sizeClasses[size]} rounded-full bg-slate-50 border border-purple-100 flex items-center justify-center shadow-sm text-[#662D91] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(102,45,145,0.3)] hover:border-[#662D91]/30 group`}>
            <Icon className={`${iconSizes[size]}`} strokeWidth={1.5} />
        </div>
    );
};

export default ContactIcon;
