import React from 'react';
import { motion } from 'framer-motion';

const PieChart = ({ percent, label, subLabel }) => (
    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
        <div style={{ marginBottom: '20px' }}>
            <div style={{
                position: 'relative',
                display: 'inline-flex',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: `conic-gradient(#FF9000 ${percent}%, #f5f5f5 0)`
            }}>
                <div style={{
                    position: 'absolute',
                    top: '4px',
                    left: '4px',
                    right: '4px',
                    bottom: '4px',
                    background: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                    <strong style={{ display: 'block', color: '#000', marginBottom: '5px' }}>{label}</strong>
                    <span style={{ color: '#888' }}>{percent}%</span>
                </div>
            </div>
        </div>
    </div>
);

const ProgressBar = ({ label, percent, className = "progress-bar-1" }) => (
    <div className="progress-wrap">
        <h3><span className="name-left">{label}</span><span className="value-right">{percent}%</span></h3>
        <div className="progress">
            <div className={`progress-bar ${className} progress-bar-striped active`} role="progressbar"
                aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" style={{ width: `${percent}%` }}>
            </div>
        </div>
    </div>
);

const Skills = () => {
    return (
        <div id="fh5co-skills" className="animate-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Skills
                        </motion.h2>
                    </div>
                </div>
                <div className="row row-pb-md">
                    <PieChart percent={95} label="ReactJS" />
                    <PieChart percent={95} label="AngularJS" />
                    <PieChart percent={90} label="Javascript" />
                    <PieChart percent={80} label="AWS" />
                    <PieChart percent={75} label="SQL" />
                    <PieChart percent={85} label="C#" />
                    <PieChart percent={90} label="Python" />
                    <PieChart percent={95} label="Pipeline" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ProgressBar label="Version Control" percent={95} className="progress-bar-1" />
                        <ProgressBar label="Github" percent={95} className="progress-bar-2" />
                        <ProgressBar label="YAML" percent={95} className="progress-bar-3" />
                        <ProgressBar label="Secret Remediation" percent={95} className="progress-bar-4" />
                    </div>
                    <div className="col-md-6">
                        <ProgressBar label="Design" percent={90} className="progress-bar-5" />
                        <ProgressBar label="Video Editing" percent={90} className="progress-bar-2" />
                        <ProgressBar label="Postman" percent={90} className="progress-bar-1" />
                        <ProgressBar label="Open source" percent={85} className="progress-bar-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
