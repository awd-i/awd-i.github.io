import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import { SkewedPanel } from '../UI/SkewedPanel';
import { Briefcase, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-display font-bold mb-4 border-b-4 border-white inline-block pr-12 ml-0 md:ml-12 transform-none md:transform md:-skew-x-12">
                    EXPERIENCE
                </h2>
            </motion.div>

            <div className="space-y-6">
                {profileData.experience.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                    >
                        <SkewedPanel variant="outline" className="group hover:bg-white hover:text-black transition-colors duration-300 px-6 transform-none md:transform rounded-lg md:rounded-none overflow-hidden" innerClassName="transform-none md:transform">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
                                <h3 className="text-2xl font-bold uppercase ml-0 md:ml-2 break-words w-full md:w-auto">{exp.company}</h3>
                                <span className="text-sm font-mono border border-current px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                                    {exp.dateRange}
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm mb-4 opacity-80">
                                <div className="flex items-center gap-1">
                                    <Briefcase size={14} className="flex-shrink-0" />
                                    <span className="break-words">{exp.title}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin size={14} className="flex-shrink-0" />
                                    <span className="break-words">{exp.location}</span>
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-2 h-2 bg-current transform rotate-45 flex-shrink-0" />
                                        <span className="leading-relaxed break-words">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </SkewedPanel>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
