import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <>
            <div id="fh5co-started" className="fh5co-bg-dark">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2> Get in touch!!</h2>
                                <p>Want to know about any of my skillset? Let's have a quick conversation then!!.</p>
                                <p><a href="mailto:rohansharma4792@gmail.com" className="btn btn-default btn-lg">Contact me</a></p>
                                <p><a href="resume.pdf" className="btn btn-default btn-lg" target="_blank">Technical Resume</a></p>
                                <p><a href="resume ux.pdf" target="_blank" className="btn btn-default btn-lg">Non-Technical Resume</a></p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="fh5co-consult">
                <div className="video fh5co-video" style={{ backgroundImage: 'url(/images/cover_bg_6.jpeg)' }}>
                    <div className="overlay"></div>
                </div>
                <div className="choose animate-box">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Contact</h2>
                        <form action="#">
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="text" id="fname" className="form-control" placeholder="Your firstname" />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="text" id="lname" className="form-control" placeholder="Your lastname" />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="text" id="email" className="form-control" placeholder="Your email address" />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Begin typing here"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <a className="btn btn-primary" href="mailto:rohansharma4792@gmail.com">Send message</a>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Contact;
