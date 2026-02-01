import React, { useEffect, useState } from 'react';

const GoToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`gototop js-top ${visible ? 'active' : ''}`}>
            <a href="#" className="js-gotop" onClick={scrollToTop}><i className="icon-arrow-up22"></i></a>
        </div>
    );
};

export default GoToTop;
