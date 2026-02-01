import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id="fh5co-about" className="animate-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <strong>About Me</strong>
                        </motion.h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="top-photo" style={{ backgroundImage: 'url(/images/cover_bg_5.jpeg)' }}>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2>Hello There!</h2>
                            <p>I am a Computer Science undergraduate from VIT Bhopal University and a full stack developer
                                at <strong>S&P Global</strong> focused on building performant, user-centered digital
                                solutions. I work with modern front‑end and back‑end technologies including React,
                                JavaScript (ES6+), Angular, AWS, Terraform, CI/CD, Python, C#, dotnet, Node.js, SQL,
                                Firebase, Java and Git.</p>
                            <p>I contribute across the full software development lifecycle—designing, implementing, and
                                maintaining scalable, maintainable solutions in collaboration with cross‑functional teams. I
                                tend to bring creativity, discipline, and attention to detail to the table and I’m
                                passionate about delivering high‑quality software that positively impacts users and
                                businesses.</p>
                            <p>I am also a pianist and performer. Music has always been an integral part of my life, and I
                                find joy in expressing myself through melodies and harmonies. Whether it's playing classical
                                pieces or contemporary tunes, I love the way music can connect people and evoke emotions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
