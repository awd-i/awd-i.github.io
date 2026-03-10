import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import { SkewedPanel } from '../UI/SkewedPanel';
import { Mail, Github } from 'lucide-react';

export const AboutSection: React.FC = () => {
    const { about } = profileData;

    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-display font-bold mb-4 border-b-4 border-white inline-block pr-12 ml-0 md:ml-12 transform-none md:transform md:-skew-x-12">
                    WhitedeerOS Alpha
                </h2>
            </motion.div>

            <div className="space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <SkewedPanel variant="outline" className="group hover:bg-white hover:text-black transition-colors duration-300 px-6 transform-none md:transform rounded-lg md:rounded-none overflow-hidden" innerClassName="transform-none md:transform">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <p className="text-xs font-bold italic uppercase leading-relaxed">
                                {about.bio}
                            </p>
                            <div className="flex items-center gap-4 flex-shrink-0">
                                {about.email && (
                                    <a
                                        href={`mailto:${about.email}`}
                                        className="flex items-center gap-1.5 text-xs font-mono hover:underline group whitespace-nowrap"
                                    >
                                        <Mail size={14} className="group-hover:scale-110 transition-transform" />
                                        {about.email}
                                    </a>
                                )}
                                {about.github && (
                                    <a
                                        href={about.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-mono hover:underline group whitespace-nowrap"
                                    >
                                        <Github size={14} className="group-hover:scale-110 transition-transform" />
                                        awd-i
                                    </a>
                                )}
                            </div>
                        </div>
                    </SkewedPanel>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <SkewedPanel variant="outline" className="px-6 py-3 transform-none md:transform rounded-lg md:rounded-none" innerClassName="transform-none md:transform">
                        <h3 className="text-lg font-bold mb-3 uppercase border-b border-white/30 pb-1">Activity</h3>
                        <img
                            src="https://ghchart.rshah.org/awd-i"
                            alt="GitHub contribution graph"
                            className="w-full"
                            style={{ filter: 'grayscale(1) invert(1) brightness(2.5) contrast(0.7)' }}
                        />
                    </SkewedPanel>
                </motion.div>
            </div>
        </div>
    );
};
