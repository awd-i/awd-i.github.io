import React from 'react';
import { SideMenu } from '../Menu/SideMenu';
import { WhiteDeerPersona } from '../Persona/WhiteDeerPersona';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { SkewedPanel } from '../UI/SkewedPanel';

interface MainLayoutProps {
    children: React.ReactNode;
    activeSection: string;
    onSectionChange: (section: string) => void;
    showMobileContent: boolean;
    onBackToMenu: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    activeSection,
    onSectionChange,
    showMobileContent,
    onBackToMenu
}) => {
    return (
        <div className="w-screen h-screen bg-black flex items-center justify-center">
            <div className="relative w-full h-full max-w-[1440px] max-h-[900px] bg-black overflow-hidden flex flex-col md:flex-row">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black -z-10" />

            {/* Diagonal Background Stripe */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 -skew-x-12 transform origin-bottom-right -z-10" />

            {/* Mobile/Desktop Layout */}

            {/* Left Column: Menu - Hidden on mobile when content is shown */}
            <div className={`w-full md:w-1/4 h-auto md:h-full flex items-center justify-center md:justify-end p-4 z-30 ${showMobileContent ? 'hidden md:flex' : 'flex'}`}>
                <SideMenu activeSection={activeSection} onSectionChange={onSectionChange} />
            </div>

            {/* Center: Persona (Integrated with content) - Always visible */}
            <div className="absolute inset-0 pointer-events-none z-10">
                <WhiteDeerPersona activeSection={activeSection} />
            </div>

            {/* Right Column: Content - Hidden on mobile until section is selected */}
            <div className={`w-full md:w-3/4 h-full relative z-20 md:z-20 flex items-center p-4 md:pl-4 md:pr-20 transition-all duration-700 ${activeSection === 'about' ? 'md:translate-x-12' : 'translate-x-0'} ${showMobileContent ? 'flex' : 'hidden md:flex'}`}>
                {/* Mobile Back Button - Styled like menu buttons */}
                <motion.div
                    onClick={onBackToMenu}
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden absolute top-4 left-4 z-50 cursor-pointer"
                >
                    <SkewedPanel skew="left" variant="white" className="border-l-8 border-l-black py-1">
                        <div className="flex items-center gap-2 font-bold font-display text-black text-lg">
                            <ArrowLeft size={20} />
                            MENU
                        </div>
                    </SkewedPanel>
                </motion.div>

                {/* Mobile: Simple rectangle centered, Desktop: Skewed panel */}
                <div className={`relative transition-all duration-700 ease-in-out w-full h-full md:w-4/5 md:h-2/3 ${activeSection === 'about' ? 'md:w-5/6 md:h-4/5' : ''} flex items-center justify-center`}>
                    <div className="w-full max-w-lg h-5/6 md:max-w-none md:h-full md:absolute md:inset-0 bg-black/30 md:bg-black/60 backdrop-blur-md border-2 border-white rounded-lg md:rounded-none md:-skew-x-12 md:transform md:origin-bottom-left overflow-hidden">
                        <div className="md:skew-x-12 w-full h-full overflow-y-auto p-6 pt-20 md:pt-8 custom-scrollbar text-sm font-mono md:text-base md:font-sans">
                            {children}
                        </div>
                    </div>

                    {/* Decorative elements - Desktop only */}
                    <div className="absolute -top-4 right-[-17%] w-32 h-8 bg-white -skew-x-12 -z-10 hidden md:block" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-8 bg-white -skew-x-12 -z-10 hidden md:block" />
                </div>
            </div>
            </div>
        </div>
    );
};
