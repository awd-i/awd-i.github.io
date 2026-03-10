import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import { SkewedPanel } from '../UI/SkewedPanel';
import { Mail, Github } from 'lucide-react';
import { XLogo } from '../UI/XLogo';

export const AboutSection: React.FC = () => {
    const { about } = profileData;

    return (
        <div className="space-y-4 pl-2 pr-2 md:pl-12 md:pr-0 min-w-0 overflow-x-hidden">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-4xl font-display font-bold italic uppercase mb-4 border-b-4 border-white inline-block pr-4 md:pr-12 transform-none md:transform md:-skew-x-12 glitch-text"
                data-text="WHITEDEEROS-Alpha2.0"
            >
                WHITEDEEROS-Alpha2.0
            </motion.h2>

            <div className="space-y-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <SkewedPanel variant="outline" className="group bg-white text-black border-black px-4 md:px-6 transform-none md:transform rounded-lg md:rounded-none overflow-hidden" innerClassName="transform-none md:transform">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 min-w-0">
                            <p className="text-xs font-bold italic uppercase leading-relaxed text-black break-words">
                                {about.bio}
                            </p>
                            <div className="flex flex-col gap-2 flex-shrink-0 text-black">
                                {about.email && (
                                    <a
                                        href={`mailto:${about.email}`}
                                        className="flex items-center gap-1.5 text-xs font-mono hover:underline group whitespace-nowrap text-black"
                                    >
                                        <Mail size={14} className="group-hover:scale-110 transition-transform text-black" />
                                        {about.email}
                                    </a>
                                )}
                                {about.github && (
                                    <a
                                        href={about.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-mono hover:underline group whitespace-nowrap text-black"
                                    >
                                        <Github size={14} className="group-hover:scale-110 transition-transform text-black" />
                                        awd-i
                                    </a>
                                )}
                                {about.twitter && (
                                    <a
                                        href={about.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-mono hover:underline group whitespace-nowrap text-black"
                                    >
                                        <XLogo size={14} className="group-hover:scale-110 transition-transform text-black" />
                                        @a_whitedeer
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
                    <SkewedPanel variant="outline" className="px-4 md:px-6 py-3 transform-none md:transform rounded-lg md:rounded-none overflow-hidden" innerClassName="transform-none md:transform">
                        <h3 className="text-lg font-bold mb-3 uppercase border-b border-white/30 pb-1">Activity</h3>
                        <img
                            src="https://ghchart.rshah.org/awd-i"
                            alt="GitHub contribution graph"
                            className="w-full"
                            style={{ filter: 'grayscale(1) invert(1) brightness(2.5) contrast(0.7)' }}
                        />
                    </SkewedPanel>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <SkewedPanel variant="outline" className="px-4 md:px-6 py-3 transform-none md:transform rounded-lg md:rounded-none overflow-hidden min-w-0" innerClassName="transform-none md:transform">
                        <iframe
                            data-testid="embed-iframe"
                            className="w-full max-w-full"
                            style={{ borderRadius: 12 }}
                            src="https://open.spotify.com/embed/playlist/1Ukt4UEczZgS4zkvxi0StD?utm_source=generator"
                            width="100%"
                            height={352}
                            frameBorder={0}
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    </SkewedPanel>
                </motion.div>
            </div>
        </div>
    );
};
