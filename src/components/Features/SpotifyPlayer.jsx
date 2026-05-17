import React from 'react';
import { motion } from 'framer-motion';

const SpotifyPlayer = () => {
    return (
        <div id="fh5co-spotify" style={{ 
            padding: '8em 0', 
            position: 'relative',
            backgroundColor: '#121212',
            backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                radial-gradient(circle at 50% 0%, #1e1e24 0%, #454545ff 100%)
            `,
            backgroundSize: '40px 40px, 40px 40px, 100% 100%',
            backgroundPosition: 'center top',
            overflow: 'hidden'
        }}>
            {/* Background elements for Spotify section */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(30,215,96,0.1) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '80%', background: 'radial-gradient(circle, rgba(255,138,0,0.08) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(50px)', zIndex: 0 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center" style={{ marginBottom: '4em' }}>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ 
                                fontSize: '2.5rem', 
                                fontWeight: '700', 
                                color: '#fff', 
                                marginBottom: '15px' 
                            }}>
                            Vibing To 🎧
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{ color: '#aaa', fontSize: '1.2rem' }}>
                            My current favorite tracks powering my life.
                        </motion.p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2" style={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, type: 'spring' }}
                            style={{ 
                                width: '100%', 
                                maxWidth: '650px', 
                                padding: '20px',
                                borderRadius: '24px', 
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                boxShadow: '0 30px 60px -12px rgba(0,0,0,0.7)' 
                            }}
                        >
                            <iframe 
                                style={{ borderRadius: '16px' }} 
                                src="https://open.spotify.com/embed/playlist/7vbIarvfpXiVS4Pax4csHd?utm_source=oembed&theme=0" 
                                width="100%" 
                                height="380" 
                                frameBorder="0" 
                                allowFullScreen="" 
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                loading="lazy"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotifyPlayer;
