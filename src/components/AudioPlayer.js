import React, { useState, useEffect } from "react";
import sun_main from "../audio/sun/EiT Sun - Main Track 00.wav";
import sun_wind2 from "../audio/sun/EiT Sun - Wind level 2 00.wav";
import sun_wind3 from "../audio/sun/EiT Sun - Wind level 2 00.wav";
import sun_windChimes1 from "../audio/sun/EiT Sun - Windchimes level 1 00.wav";
import sun_windChimes2 from "../audio/sun/EiT Sun - Windchimes level 2 00.wav";
import sun_windChimes3 from "../audio/sun/EiT Sun - Windchimes level 3 00.wav";
import rain_main from "../audio/rain/EiT Rain - Main Track 00.wav";
import rain_wind2 from "../audio/rain/EiT Rain - Wind level 2 00.wav";
import rain_wind3 from "../audio/rain/EiT Rain - Wind level 2 00.wav";
import rain_windChimes1 from "../audio/rain/EiT Rain - Windchimes level 1 00.wav";
import rain_windChimes2 from "../audio/rain/EiT Rain - Windchimes level 2 00.wav";
import rain_windChimes3 from "../audio/rain/EiT Rain - Windchimes level 3 00.wav";
import rain_rain1 from "../audio/rain/EiT Rain - Rain level 1 00.wav";
import rain_rain2 from "../audio/rain/EiT Rain - Rain level 2 00.wav";
import rain_rain3 from "../audio/rain/EiT Rain - Rain level 3 00.wav";

// When to start the loop track
const loopCrossFade = 10;

// Plays and pauses the audio given by the url
const useAudio = (url, loop) => {
  const [audio, setAudio] = useState([]);
  const [loopAudio, setLoopAudio] = useState([]); // Need duplicated audio to start loop before audio ends

  const [playing, setPlaying] = useState(false);

  // Toggle the audio state
  const toggle = () => setPlaying(!playing);

  // Plays audio, if we start loop, play loopAudio
  const playAudio = (useLoopAudio = false) => {
    if (!useLoopAudio) {
      for (let i = 0; i < audio.length; i++) {
        audio[i].play();
      }
    } else {
      for (let i = 0; i < loopAudio.length; i++) {
        loopAudio[i].play();
      }
    }
  };

  // Pauses all audio
  const pauseAudio = () => {
    for (let i = 0; i < audio.length; i++) {
      audio[i].pause();
    }
    for (let i = 0; i < loopAudio.length; i++) {
      loopAudio[i].pause();
    }
  };

  // Initialize the audio clips
  useEffect(() => {
    const audios = [];
    const loopAudios = [];
    for (var i = 0; i < url.length; i++) {
      audios.push(new Audio(url[i]));
      loopAudios.push(new Audio(url[i]));
    }
    pauseAudio();
    setAudio(audios);
    setLoopAudio(loopAudios);
  }, [url[0], url[1]]);

  // Plays or pauses the audio clip based on button state
  useEffect(() => {
    playing ? playAudio() : pauseAudio();
  }, [playing, audio]);

  // Updates the button state once the audio clip has ended
  // if looping the auido clip will restart and button will not be updated
  useEffect(() => {
    let timeLeft = 999999999;
    let useLoopAudio = false;

    // Check timeleft of track every second
    const interval = setInterval(() => {
      if (useLoopAudio)
        timeLeft = loopAudio[0].duration - loopAudio[0].currentTime;
      else timeLeft = audio[0].duration - audio[0].currentTime;

      if (loop) {
        if (timeLeft < loopCrossFade) {
          playAudio(!useLoopAudio);
          useLoopAudio = !useLoopAudio;
        }
      } else if (timeLeft === 0) {
        setPlaying(false);
      }
    }, 1000);

    !playing && clearInterval(interval);
    return () => clearInterval(interval);
  }, [playing, audio]);

  // Return the current audio state and the toggle function
  return [playing, toggle];
};

// For easy access, contains path to audio
const audio = {
  sunny: {
    main: sun_main,
    wind: [sun_wind2, sun_wind3],
    chimes: [sun_windChimes1, sun_windChimes2, sun_windChimes3],
  },
  rain: {
    main: rain_main,
    wind: [rain_wind2, rain_wind3],
    chimes: [rain_windChimes1, rain_windChimes2, rain_windChimes3],
    rain: [rain_rain1, rain_rain2, rain_rain3],
  },
};

// Returns an audioplayer component according to weather
// Takes eatherClass, windLevel, rainLevel and a boolean for looping
const AudioPlayer = ({ weatherClass, windLevel, rainLevel, loop }) => {
  // Add audiotrack according to weather
  let audioTracks = [
    audio[weatherClass].main,
    audio[weatherClass].chimes[windLevel],
  ];
  if (windLevel > 0) audioTracks.push(audio[weatherClass].wind[windLevel]);
  if (weatherClass === "rain")
    audioTracks.push(audio[weatherClass].rain[rainLevel]);

  // useAudio is used to play and pause the audio
  const [playing, toggle] = useAudio(audioTracks, loop);

  return (
    <img
      className={`navbar-image ${playing ? "" : "contrast-filter"}`}
      src={"/assets/sound.png"}
      onClick={toggle}
      alt="sound-button"
    />
  );
};

export default AudioPlayer;
