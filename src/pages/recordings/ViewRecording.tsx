/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { ICONS } from "../../assets";

const ViewRecording = ({ recording, setOpenViewModal, setOpenModal }: { recording: any }) => {
  const [isPlaying, setIsPlaying] = useState(false); // Tracks if audio is playing
  const [currentTime, setCurrentTime] = useState(0); // Tracks current playback time
  const [duration, setDuration] = useState(0); // Tracks audio duration
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRewind = (seconds: number) => {
    if (audioRef.current) {
      const newTime = Math.max(0, audioRef.current.currentTime - seconds);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleForward = (seconds: number) => {
    if (audioRef.current) {
      const newTime = Math.min(duration, audioRef.current.currentTime + seconds);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <img
        src={recording?.bannerimage?.thumbnailUrl}
        alt="banner-img"
        className="mt-4 w-[440px] h-[250px] rounded-xl"
      />

      <h1 className="text-[#251605] text-xl font-medium leading-6 mt-5">
        {recording?.name}
      </h1>

      {/* Audio player */}
      <audio
        ref={audioRef}
        src={recording?.recordingfile?.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>

      <div className="mt-5">
        {/* Progress Bar */}
        <div className="bg-[#251605] h-[6px] w-full rounded-3xl relative">
          <div
            className="bg-[#0075FF] h-[6px] rounded-3xl"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p className="text-[#463730] leading-[18px]">{formatTime(currentTime)}</p>
          <p className="text-[#463730] leading-[18px]">{formatTime(duration)}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 w-full">
        <div></div>
        <div className="flex items-center gap-4">
          <img
            src={ICONS.rewindBack}
            alt="rewind-back"
            className="size-5 cursor-pointer"
            onClick={() => handleRewind(10)} // Rewind 10 seconds
          />
          <img
            src={isPlaying ? ICONS.pause : ICONS.play}
            alt={isPlaying ? "pause" : "play"}
            className="size-12 cursor-pointer"
            onClick={handlePlayPause} // Toggle play/pause
          />
          <img
            src={ICONS.rewindForward}
            alt="rewind-forward"
            className="size-5 cursor-pointer"
            onClick={() => handleForward(10)} // Forward 10 seconds
          />
        </div>
        <img onClick={() => {
            setOpenViewModal(false);
            setOpenModal(true)
        }} src={ICONS.pen} alt="pen" className="size-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default ViewRecording;
