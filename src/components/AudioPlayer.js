import React, { useState, useEffect } from "react";

// Plays and pauses the audio given by the url
const useAudio = (url, loop) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  // Toggle the audio state
  const toggle = () => setPlaying(!playing);

  // Plays or pauses the audio clip
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  // Updates the button state once the audio clip has ended
  // if looping the auido clip will restart and button will not be updated
  useEffect(() => {
    loop
      ? audio.addEventListener("ended", () => audio.play())
      : audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      loop
        ? audio.removeEventListener("ended", () => audio.play())
        : audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio, loop]);

  // Return the current audio state and the toggle function
  return [playing, toggle];
};

// Returns an audioplayer component
// Takes in the url to an auido clip and a boolean for looping
const AudioPlayer = ({ url, loop }) => {
  // useAudio is used to play and pause the audio
  const [playing, toggle] = useAudio(url, loop);

  return (
    <div>
      <button onClick={toggle}>{playing ? "X" : "♫"}</button>
    </div>
  );
};

export default AudioPlayer;
