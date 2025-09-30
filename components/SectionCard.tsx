
import React from 'react';
import { IconProps } from './icons/Icons';

interface SectionCardProps {
    id: string;
    title: string;
    icon: React.ComponentType<IconProps>;
    children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ id, title, icon: Icon, children }) => {
    return (
        <section id={id} className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-slate-200/80">
            <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                   <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 ml-4">{title}</h2>
            </div>
            <div className="space-y-6">
                {children}
            </div>
        </section>
    );
};

export default SectionCard;
