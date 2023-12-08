import React, { useRef, useEffect, useState } from 'react';
import audio from './mario.mp3';

const MonComposantAudio = () => {
    const audioRef = useRef(null);
    const [buttonVisible, setButtonVisible] = useState(true);

    useEffect(() => {
        // Autoplay the audio when the component is mounted
        const playPromise = audioRef.current.play();

        // Handling autoplay restrictions
        if (playPromise !== undefined) {
            playPromise.then(_ => { }).catch(error => {
                // Autoplay was prevented.
                // You can handle the error here.
            });
        }
    }, []);

    const startPlayback = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setButtonVisible(true);
        }
    };

    return (
        <div>
            {buttonVisible && <button onClick={startPlayback} style={{ position: "absolute", "transformY": "-1000px" ,opacity:"0.0"}}>Start Playback</button>}
            <audio ref={audioRef} controls style={{ display: 'none' }} volume="1.0" autoPlay>
                <source src={audio} type="audio/mp3" />
            </audio>
        </div>
    );
};

export default MonComposantAudio;
