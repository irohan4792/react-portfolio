import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, date, desc, image, link, label = "Visit" }) => (
    <div className="col-md-4 col-sm-6">
        <motion.div
            className="fh5co-blog"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <a href={link} target="_blank" className="blog-bg"
                style={{ backgroundImage: `url(${image})`, backgroundSize: '100%' }}></a>
            <div className="blog-text">
                <span className="posted_on">{date}</span>
                <h3><a href={link} target="_blank">{title}</a></h3>
                <p>{desc}</p>
                <ul className="stuff">
                    <li><a href={link} target="_blank">{label}<i className="icon-arrow-right22"></i></a></li>
                </ul>
            </div>
        </motion.div>
    </div>
);

const Projects = () => {
    return (
        <>
            <div id="fh5co-blog" className="center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2>Projects</h2>
                                <p>These are some of the projects which i have worked on and they are readily deployed. Click on the links to visit.</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="row">
                        <ProjectCard
                            title="MoovyMaster"
                            date="January, 2023"
                            desc="It's an encyclopedia of movies in simple words."
                            image="/images/moovymaster.jpg"
                            link="https://moovymaster.netlify.app/"
                        />
                        <ProjectCard
                            title="ChatMaster"
                            date="February, 2023"
                            desc="It's a chatting website based on react and firebase"
                            image="/images/chatmaster.jpg"
                            link="https://chat-master.netlify.app"
                        />
                        <ProjectCard
                            title="Nike Store"
                            date="September, 2023"
                            desc="It's a react based shopping site for nike which includes features such as payment, add to cart, wishlist etc."
                            image="/images/nikestore.png"
                            link="https://nike-store-online.netlify.app/"
                        />
                    </div>
                </div>
            </div>

            <div id="fh5co-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2>Posts on Youtube</h2>
                                <p>These are some of the covers and tutorials which i posted on youtube.</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="row">
                        <ProjectCard
                            title="Kaise Hua Piano Cover"
                            date="July 19th 2021"
                            desc="Piano cover of the song kaise hua from the movie Kabir Singh."
                            image="/images/portfolio-1.png"
                            link="https://www.youtube.com/watch?v=wc_h4mxoNdo"
                        />
                        <ProjectCard
                            title="Tum Hi Ho Tutorial"
                            date="Mar. 16th 2022"
                            desc="Piano tutorial of the song tum hi ho from the movie aashiqui 2."
                            image="/images/portfolio-2.png"
                            link="https://www.youtube.com/watch?v=fF-7KSvDsb4"
                        />
                        <ProjectCard
                            title="Arcade x Mann Mera"
                            date="Sep. 19th 2021"
                            desc="Piano cover of the song Arcade x mann mera composed by gravero. Comment from gravero was a dream come true for me!!"
                            image="/images/portfolio-3.png"
                            link="https://www.youtube.com/watch?v=VLnVy3Zjyek"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
