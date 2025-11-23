import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import { SkewedPanel } from '../UI/SkewedPanel';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
    const { education } = profileData;

    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-display font-bold mb-4 border-b-4 border-white inline-block pr-12 ml-0 md:ml-12 transform-none md:transform md:-skew-x-12">
                    EDUCATION
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
            >
                <SkewedPanel variant="white" className="mb-8 px-8 transform-none md:transform rounded-lg md:rounded-none">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-3xl font-bold uppercase mb-1">{education.school}</h3>
                            <p className="text-xl font-medium">{education.degree} in {education.major}</p>
                        </div>
                        <GraduationCap size={48} strokeWidth={1.5} />
                    </div>
                    <p className="mt-4 font-mono text-sm border-t-2 border-black pt-2 inline-block">
                        {education.dates}
                    </p>
                </SkewedPanel>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <SkewedPanel variant="outline" className="h-full px-6 transform-none md:transform rounded-lg md:rounded-none">
                        <div className="flex items-center gap-2 mb-4 border-b border-white pb-2 ml-0 md:ml-6">
                            <BookOpen size={20} />
                            <h4 className="text-xl font-bold">KEY COURSEWORK</h4>
                        </div>
                        <ul className="grid grid-cols-1 gap-2">
                            {education.coursework.map((course, i) => (
                                <li key={i} className="text-sm font-mono hover:bg-white hover:text-black px-2 py-1 transition-colors cursor-default">
                                    {course}
                                </li>
                            ))}
                        </ul>
                    </SkewedPanel>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <SkewedPanel variant="outline" className="h-full px-6 transform-none md:transform rounded-lg md:rounded-none">
                        <div className="flex items-center gap-2 mb-4 border-b border-white pb-2 ml-0 md:ml-3">
                            <Award size={20} />
                            <h4 className="text-xl font-bold">HONORS & AWARDS</h4>
                        </div>
                        <ul className="space-y-3">
                            {education.honors.map((honor, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="w-1 min-w-[4px] h-4 bg-white block mt-1 flex-shrink-0" />
                                    <span className="text-sm leading-relaxed">{honor}</span>
                                </li>
                            ))}
                        </ul>
                    </SkewedPanel>
                </motion.div>
            </div>
        </div>
    );
};
