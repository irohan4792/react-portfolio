import React, { useEffect, useState } from 'react';
import '../../assets/css/style.css'; // Ensure we can reference styles if needed

const Loader = () => {
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        // Start fading out after 800ms
        const fadeTimer = setTimeout(() => {
            setFading(true);
        }, 800);

        // Remove from DOM after fade transition (e.g., 500ms fade) -> Total 1.3s
        const removeTimer = setTimeout(() => {
            setVisible(false);
        }, 1300);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <div className={`fh5co-loader ${fading ? 'fade-out' : ''}`}></div>
    );
};

export default Loader;
