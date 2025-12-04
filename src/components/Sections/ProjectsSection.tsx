import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import { SkewedPanel } from '../UI/SkewedPanel';
import { Github, ExternalLink, Code } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-display font-bold mb-4 border-b-4 border-white inline-block pr-12 ml-0 md:ml-12 transform-none md:transform md:-skew-x-12">
                    PROJECTS
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
                {profileData.projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                    >
                        <SkewedPanel variant="black" className="group hover:border-white transition-all duration-300 px-6 transform-none md:transform rounded-lg md:rounded-none overflow-hidden" innerClassName="transform-none md:transform">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                                <h3 className="text-2xl font-bold font-display tracking-wide group-hover:text-p5-light-gray transition-colors ml-0 md:ml-2 break-words w-full md:w-auto">
                                    {project.name}
                                </h3>
                                <div className="flex gap-3 flex-shrink-0">
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 hover:bg-white hover:text-black rounded-full transition-colors"
                                            title="View Code"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.links.live && (
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 hover:bg-white hover:text-black rounded-full transition-colors"
                                            title="Live Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-lg mb-4 font-medium break-words">{project.shortDescription}</p>

                            <div className="mb-4 flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="text-xs font-mono border border-white/50 px-2 py-1 rounded break-words">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="bg-white/10 p-3 rounded-md md:rounded-none transform-none md:transform md:-skew-x-12 border-l-4 border-white overflow-hidden">
                                <p className="text-sm transform-none md:transform md:skew-x-12 flex items-start gap-3">
                                    <Code size={18} className="mt-0.5 flex-shrink-0" />
                                    <span className="leading-relaxed break-words">{project.impact}</span>
                                </p>
                            </div>
                        </SkewedPanel>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
