import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    // Generate random dots only once
    const dots = useMemo(() => {
        return Array.from({ length: 40 }).map(() => ({
            size: Math.random() * 8 + 3,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: Math.random() * 10 + 8,
            color: Math.random() > 0.5 ? '#ffffff' : '#ffa500',
            opacity: Math.random() * 0.5 + 0.3,
            xOffset: Math.random() * 60 - 30
        }));
    }, []);

    return (
        <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{ backgroundImage: 'url(/images/cover_bg_4.jpg)', backgroundPosition: 'center', height: '100vh', position: 'relative', overflow: 'hidden' }} data-stellar-background-ratio="0.5">
            {/* Floating Dots Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
                {dots.map((dot, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: '100vh', x: 0, opacity: 0 }}
                        animate={{ 
                            y: '-20vh', 
                            x: dot.xOffset, 
                            opacity: [0, dot.opacity, dot.opacity, 0] 
                        }}
                        transition={{
                            duration: dot.duration,
                            repeat: Infinity,
                            delay: dot.delay,
                            ease: "linear"
                        }}
                        style={{
                            position: 'absolute',
                            left: `${dot.left}%`,
                            width: `${dot.size}px`,
                            height: `${dot.size}px`,
                            backgroundColor: dot.color,
                            borderRadius: '50%',
                            boxShadow: `0 0 ${dot.size * 2}px ${dot.color}`
                        }}
                    />
                ))}
            </div>

            <div className="overlay" style={{ zIndex: 2 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <div className="display-t js-fullheight" style={{ height: '100vh' }}>
                            <motion.div
                                className="display-tc js-fullheight"
                                style={{ height: '100vh' }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <h1><span>Rohan Sharma</span></h1>
                                <h3><span>Engineer / Pianist and Performer / Learner</span></h3>
                                <div>
                                    <ul className="fh5co-social-icons" style={{ marginTop: '20px' }}>
                                        <li><a href="https://www.youtube.com/channel/UCX9AADu-XurIZVW1btPm7Ew" target="_blank"><i className="icon-youtube2"></i></a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=100004461168709" target="_blank"><i className="icon-facebook2"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/rohan-sharma-1749ba21a/" target="_blank"><i className="icon-linkedin2"></i></a></li>
                                        <li><a href="https://www.instagram.com/mai_rohann/" target="_blank"><i className="icon-instagram2"></i></a></li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
