import React from 'react';
import { motion } from 'framer-motion';

const ResumeItem = ({ title, company, icon, inverted = false }) => {
    return (
        <motion.li
            className={`${inverted ? 'timeline-inverted' : 'timeline-unverted'} animate-box`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="timeline-badge"><i className={icon}></i></div>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h3 className="timeline-title">{title}</h3>
                    <span className="company">{company}</span>
                </div>
                <div className="timeline-body">
                </div>
            </div>
        </motion.li>
    );
};

const ResumeHeading = ({ title }) => (
    <motion.li
        className="timeline-heading text-center animate-box"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
    >
        <div><h3>{title}</h3></div>
    </motion.li>
);

const Resume = () => {
    return (
        <div id="fh5co-resume" className="fh5co-bg-color">
            <div className="container">
                <div className="row animate-box">
                    {/* <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h2>My Resume</h2>
                </div> */}
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-offset-0">
                        <ul className="timeline">
                            <ResumeHeading title="Education" />
                            <ResumeItem
                                inverted={true}
                                icon="icon-graduation-cap"
                                title="10th"
                                company="Sir Padampat Singhania School - 2018"
                            />
                            <ResumeItem
                                inverted={false}
                                icon="icon-graduation-cap"
                                title="12th or equivalent"
                                company="St. Joseph's Convent School - 2020"
                            />
                            <ResumeItem
                                inverted={true}
                                icon="icon-graduation-cap"
                                title="Vellore Institute of Technology, Bhopal"
                                company="Bachelor's degree 2020 - 2024"
                            />

                            <br />

                            <ResumeHeading title="Roles and Skills" />
                            <ResumeItem
                                inverted={false}
                                icon="icon-suitcase"
                                title="UI/UX intern @ Appsynergies"
                                company="Dec 2022 - June 2023"
                            />
                            <ResumeItem
                                inverted={true}
                                icon="icon-suitcase"
                                title="Software Engineer at S&P Global"
                                company="June 2024 - 2025"
                            />
                            <ResumeItem
                                inverted={false}
                                icon="icon-suitcase"
                                title="Engineer 1 at S&P Global"
                                company="Jan 2025 - Present"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
