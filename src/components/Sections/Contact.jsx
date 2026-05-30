import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const playSuccessSound = () => {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            
            const playTone = (freq, time, dur, vol) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.value = freq;
                
                gain.gain.setValueAtTime(0, ctx.currentTime + time);
                gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + time + 0.05);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + time + dur);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.start(ctx.currentTime + time);
                osc.stop(ctx.currentTime + time + dur);
            };
            
            playTone(523.25, 0, 0.5, 0.1);
            playTone(659.25, 0.1, 0.5, 0.1);
            playTone(783.99, 0.2, 0.6, 0.1);
            playTone(1046.50, 0.3, 0.8, 0.1);
        } catch (e) {
            console.log("Audio playback failed", e);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
            toast.error("Please fill in all required fields!");
            return;
        }

        setIsSubmitting(true);
        const loadingToast = toast.loading("Sending message...");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                    name: `${formData.firstname} ${formData.lastname}`,
                    email: formData.email,
                    subject: formData.subject || "New Portfolio Contact",
                    message: formData.message,
                }),
            });

            const result = await response.json();
            if (result.success) {
                toast.success("Message sent successfully! I'll get back to you soon.", { id: loadingToast });
                playSuccessSound();
                setFormData({ firstname: '', lastname: '', email: '', subject: '', message: '' }); // clear form
            } else {
                toast.error("Something went wrong. Please try again.", { id: loadingToast });
            }
        } catch (error) {
            toast.error("Network error. Please try again later.", { id: loadingToast });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                <p><a href="#fh5co-consult" className="btn btn-default btn-lg">Contact me</a></p>
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
                        <form onSubmit={handleSubmit}>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="text" name="firstname" className="form-control" placeholder="Your firstname" value={formData.firstname} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="text" name="lastname" className="form-control" placeholder="Your lastname" value={formData.lastname} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="email" name="email" className="form-control" placeholder="Your email address" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="text" name="subject" className="form-control" placeholder="Your subject of this message" value={formData.subject} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <textarea name="message" cols="30" rows="10" className="form-control" placeholder="Begin typing here" value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send message'}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Contact;
