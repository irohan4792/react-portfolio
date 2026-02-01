import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const playlist = [
    {
        id: 1,
        title: "Closer",
        artist: "Rohan Sharma",
        src: "https://github.com/irohan4792/portfolio-website/releases/download/audio-files/closer.wav"
    },
    {
        id: 2,
        title: "Golden Hour",
        artist: "Rohan Sharma",
        src: "https://github.com/irohan4792/portfolio-website/releases/download/audio-files/golden_hour.wav"
    },
    {
        id: 3,
        title: "Kaise hua",
        artist: "Rohan Sharma",
        src: "https://github.com/irohan4792/portfolio-website/releases/download/audio-files/kaise_hua.wav"
    },
    {
        id: 4,
        title: "Kho Gaye",
        artist: "Rohan Sharma",
        src: "https://github.com/irohan4792/portfolio-website/releases/download/audio-files/kho_gaye.wav"
    },
    {
        id: 5,
        title: "Ranjha",
        artist: "Rohan Sharma",
        src: "https://github.com/irohan4792/portfolio-website/releases/download/audio-files/ranjha.wav"
    },
    {
        id: 6,
        title: "Saiyaara",
        artist: "Rohan Sharma",
        src: "https://github.com/irohan4792/portfolio-website/releases/download/audio-files/saiyara.wav"
    },
    {
        id: 7,
        title: "Wildest Dreams",
        artist: "Rohan Sharma",
        src: "https://github.com/irohan4792/portfolio-website/releases/download/audio-files/wildest_dreams.wav"
    }
];

const MusicPlayer = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true); // Default collapsed
    const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
    const [volume, setVolume] = useState(70);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);

    const currentSong = playlist[currentSongIndex];

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch(e => console.log("Play failed", e));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentSongIndex]);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const dur = audioRef.current.duration;
            setCurrentTime(current);
            setDuration(dur || 0);
            setProgress((current / dur) * 100 || 0);
        }
    };

    const handleSongEnd = () => {
        handleNext();
    };

    const handleNext = () => {
        setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
        setIsPlaying(true);
    };

    const handlePrev = () => {
        setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
        setIsPlaying(true);
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        if (isCollapsed) setIsCollapsed(false);
    };

    const togglePlaylist = () => {
        setIsPlaylistOpen(!isPlaylistOpen);
        if (isCollapsed) setIsCollapsed(false);
    };

    const playerRef = useRef(null);

    const togglePlayer = () => {
        setIsCollapsed(!isCollapsed);
        // setIsPlaylistOpen(false); // REMOVED: Keep playlist state as is
    };

    // Click outside to collapse
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (playerRef.current && !playerRef.current.contains(event.target) && !isCollapsed) {
                setIsCollapsed(true);
                // setIsPlaylistOpen(false); // REMOVED: Keep playlist state as is
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCollapsed]);

    // Prevent scroll on body when scrolling inside player
    useEffect(() => {
        const player = playerRef.current;
        if (!player) return;

        const preventScroll = (e) => {
            // Check if we are scrolling the playlist
            const playlist = player.querySelector('.playlist-container');
            const isPlaylist = playlist && playlist.contains(e.target);

            // If scrolling playlist and it has scrollable content, let it scroll (overscroll-behavior will handle end)
            // But if we want to be super strict to prevent ANY main page scroll:
            if (isPlaylist) {
                // Let the event happen naturally so playlist scrolls
                // overscroll-behavior: contain in CSS will prevent chaining
                e.stopPropagation();
            } else {
                // If hovering elsewhere in player (controls etc), block scroll completely
                e.preventDefault();
            }
        };

        player.addEventListener('wheel', preventScroll, { passive: false });
        // player.addEventListener('touchmove', preventScroll, { passive: false }); // Optional for touch

        return () => {
            player.removeEventListener('wheel', preventScroll);
            // player.removeEventListener('touchmove', preventScroll);
        };
    }, []);

    const handleProgressChange = (e) => {
        const val = e.target.value;
        const time = (val / 100) * duration;
        if (audioRef.current) audioRef.current.currentTime = time;
        setProgress(val);
    };

    const formatTime = (seconds) => {
        if (!seconds || isNaN(seconds)) return '0:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };


    return (
        <motion.div
            id="music-player"
            ref={playerRef}
            className={`music-player ${isCollapsed ? 'collapsed' : ''}`}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 0 }}
            animate={{
                y: isCollapsed ? "calc(100% - 0px)" : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            {/* Toggle Button (Floating Icon) */}
            <motion.div
                id="player-toggle"
                className={`player-toggle ${isCollapsed ? '' : 'hide'}`}
                onClick={(e) => { e.stopPropagation(); togglePlayer(); }}
                animate={{
                    top: isCollapsed ? -60 : -25,
                    scale: isCollapsed ? 1 : 0,
                    opacity: isCollapsed ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    animate={isPlaying ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={isPlaying ? { repeat: Infinity, duration: 1.5, ease: "easeInOut" } : { duration: 0.2 }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <i className="icon-headphones"></i>
                </motion.div>
            </motion.div>

            {/* Close Chevron for Expanded State - Redesigned */}
            <AnimatePresence>
                {!isCollapsed && (
                    <motion.div
                        className="player-close-btn"
                        onClick={togglePlayer}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <i className="icon-cross"></i>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="player-container"
                animate={{ opacity: isCollapsed ? 0 : 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="player-info">
                    <div className="song-title" id="song-title">{currentSong.title}</div>
                    <div className="song-artist" id="song-artist">{currentSong.artist}</div>
                </div>

                <audio
                    ref={audioRef}
                    src={currentSong.src}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleSongEnd}
                ></audio>

                <div className="progress-container">
                    <span className="time" id="current-time">{formatTime(currentTime)}</span>
                    <div className="progress-bar">
                        <div className="progress" id="progress" style={{ width: `${progress}%` }}></div>
                        <input type="range" id="progress-range" min="0" max="100" value={progress} onChange={handleProgressChange} />
                    </div>
                    <span className="time" id="duration-time">{formatTime(duration)}</span>
                </div>

                <div className="player-controls">
                    <button className="control-btn" id="prev-btn" title="Previous" onClick={handlePrev}>
                        <i className="icon-arrow-left22"></i>
                    </button>
                    <button className="control-btn play-btn" id="play-btn" title="Play/Pause" onClick={togglePlay}>
                        <i className={isPlaying ? "icon-pause2" : "icon-play3"}></i>
                    </button>
                    <button className="control-btn" id="next-btn" title="Next" onClick={handleNext}>
                        <i className="icon-arrow-right22"></i>
                    </button>
                    <button className="control-btn" id="toggle-playlist-btn" title="Playlist" onClick={togglePlaylist}>
                        <i className="icon-list2"></i>
                    </button>
                    <div className="volume-control">
                        <i className="icon-volume-high"></i>
                        <input type="range" id="volume-range" min="0" max="100" value={volume} onChange={(e) => setVolume(e.target.value)} />
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {isPlaylistOpen && !isCollapsed && (
                    <motion.div
                        className="playlist-container"
                        id="playlist-container"
                        initial={{ height: 0, opacity: 0, marginTop: 0, padding: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 10, padding: 10 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0, padding: 0 }}
                        style={{ maxHeight: '200px' }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <h3 className="playlist-title">Piano Playlist</h3>
                        <ul id="playlist" style={{ marginLeft: '-35px' }}>
                            {playlist.map((song, index) => (
                                <li
                                    key={song.id}
                                    className={`playlist-item ${index === currentSongIndex ? 'active' : ''}`}
                                    onClick={() => { setCurrentSongIndex(index); setIsPlaying(true); }}
                                >
                                    <i className="icon-music" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i>
                                    {song.title} - {song.artist}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default MusicPlayer;
