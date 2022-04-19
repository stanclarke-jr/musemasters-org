import { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/city/index.css';
import '@videojs/themes/dist/fantasy/index.css';
import '@videojs/themes/dist/forest/index.css';
import '@videojs/themes/dist/sea/index.css';

const VideoPlayer = ({ onReady, options, themeName = 'city' }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;

    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options);
      console.log('player is ready');
      onReady && onReady(player);
    }

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video
        id="vid1"
        ref={videoRef}
        className={`video-js vjs-big-play-centered vjs-theme-${themeName}`}
        preload="auto"
        // width="750px"
        // height="422px"
      ></video>
    </div>
  );
};

export default VideoPlayer;
