import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #1f1807 0%, #30260c 50%, #141005 100%)',
            color: '#fff',
            fontFamily: "'Inter', system-ui, sans-serif",
            overflow: 'hidden',
            position: 'relative'
        }}>
            {/* Glowing background orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute', top: '20%', left: '30%', width: '400px', height: '400px',
                    background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0
                }}
            />
            <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute', bottom: '10%', right: '20%', width: '500px', height: '500px',
                    background: 'radial-gradient(circle, rgba(255,140,0,0.3) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', filter: 'blur(50px)', zIndex: 0
                }}
            />

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                position: 'relative',
                zIndex: 1,
                padding: '4rem 5rem',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                textAlign: 'center'
            }}>
                <motion.h1 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    style={{ fontSize: '8rem', margin: 0, background: 'linear-gradient(to right, #ffd700, #ff8a00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}
                >
                    404
                </motion.h1>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 300, letterSpacing: '2px' }}>Page Not Found</h2>
                <p style={{ maxWidth: '400px', margin: '0 auto 3rem auto', color: '#b0b0b0', lineHeight: 1.6 }}>
                    Oops! The page you are looking for has vanished into the digital void. Let's get you back home.
                </p>
                <a href="/" style={{
                    padding: '14px 32px',
                    background: 'linear-gradient(90deg, #ffd700 0%, #ff8a00 100%)',
                    color: '#fff',
                    borderRadius: '30px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    boxShadow: '0 10px 20px -10px rgba(255, 138, 0, 0.6)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    display: 'inline-block'
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 25px -10px rgba(255, 138, 0, 0.8)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 10px 20px -10px rgba(255, 138, 0, 0.6)'; }}
                >
                    Go Back Home
                </a>
            </motion.div>
        </div>
    );
};

export default NotFound;
