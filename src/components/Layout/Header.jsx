import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{ backgroundImage: 'url(/images/cover_bg_4.jpg)', height: '100vh' }} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
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
