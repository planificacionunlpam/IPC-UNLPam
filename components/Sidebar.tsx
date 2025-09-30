import React from 'react';
import { sections } from '../constants';
import { LocationMarkerIcon } from './icons/Icons';

const Sidebar: React.FC = () => {
    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80; // Approximate height of the sticky header to prevent content from being hidden.
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update the URL hash without a jump for better UX
            if (history.pushState) {
                history.pushState(null, null, `#${sectionId}`);
            } else {
                window.location.hash = sectionId;
            }
        }
    };

    return (
        <aside className="w-64 bg-slate-800 text-white p-6 hidden md:block flex-shrink-0 sticky top-0 h-screen overflow-y-auto no-print">
            <div className="flex items-center mb-8">
                 <LocationMarkerIcon />
                <h2 className="ml-2 text-2xl font-bold">Clase 6</h2>
            </div>
            <nav>
                <ul>
                    {sections.map(section => (
                        <li key={section.id} className="mb-4">
                            <a 
                                href={`#${section.id}`} 
                                onClick={(e) => handleNavigation(e, section.id)}
                                className="text-slate-300 hover:text-white hover:bg-slate-700 rounded-md p-2 block transition-colors"
                            >
                                {section.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;