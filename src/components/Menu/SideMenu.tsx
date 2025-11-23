import React from 'react';
import { motion } from 'framer-motion';
import { SkewedPanel } from '../UI/SkewedPanel';

interface SideMenuProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
}

const sections = ['EXPERIENCE', 'EDUCATION', 'PROJECTS', 'ABOUT'];

export const SideMenu: React.FC<SideMenuProps> = ({ activeSection, onSectionChange }) => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Calculate individual button offset based on position and active section
    const getButtonOffset = (sectionName: string) => {
        // No button movements on mobile
        if (isMobile) {
            return 'translate-y-0';
        }

        const sectionIndex = sections.indexOf(sectionName);

        // For ABOUT: split the menu to frame the deer
        if (activeSection === 'about') {
            if (sectionIndex <= 2) {
                // Top buttons (EXPERIENCE, EDUCATION, PROJECTS) move UP
                return '-translate-y-32';
            } else {
                // Bottom button (ABOUT) moves DOWN
                return 'translate-y-32';
            }
        }

        // For PROJECTS and EDUCATION: keep static (no movement)
        // For EXPERIENCE: keep static (no movement)
        return 'translate-y-0';
    };

    return (
        <nav className="flex flex-col gap-4 p-4 md:p-8 w-full max-w-md md:max-w-xs z-10">
            {sections.map((section) => {
                const isActive = activeSection === section.toLowerCase();
                return (
                    <motion.div
                        key={section}
                        whileHover={{ x: 20, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onSectionChange(section.toLowerCase())}
                        className={`cursor-pointer group transition-transform duration-500 ${getButtonOffset(section)}`}
                    >
                        <SkewedPanel
                            skew="left"
                            variant={isActive ? 'white' : 'black'}
                            className={`
                border-l-8
                ${isActive ? 'border-l-black' : 'border-l-transparent group-hover:border-l-white'}
              `}
                        >
                            <span className={`
                text-3xl md:text-2xl font-bold tracking-tighter font-display
                ${isActive ? 'text-black' : 'text-white'}
              `}>
                                {section}
                            </span>
                        </SkewedPanel>
                    </motion.div>
                );
            })}
        </nav>
    );
};
