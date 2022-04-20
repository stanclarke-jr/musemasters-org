import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const YoutubeSearchContext = createContext();

export const YoutubeSearchProvider = ({ children }) => {
  const [guitarVideos, setGuitarVideos] = useState(null);
  const [pianoVideos, setPianoVideos] = useState(null);
  const [drumVideos, setDrumVideos] = useState(null);
  const [violinVideos, setViolinVideos] = useState(null);
  const [saxophoneVideos, setSaxophoneVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // axios.defaults.headers = {
  //   'Cache-Control': 'no-cache',
  // };

  const fetchVideos = () => {
    const endpoints = [
      '/api/guitar',
      '/api/piano',
      '/api/drums',
      '/api/violin',
      '/api/saxophone',
    ];
    setIsLoading(true);
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      (fetchedVideos) => {
        setGuitarVideos(fetchedVideos[0].data);
        setPianoVideos(fetchedVideos[1].data);
        setDrumVideos(fetchedVideos[2].data);
        setViolinVideos(fetchedVideos[3].data);
        setSaxophoneVideos(fetchedVideos[4].data);
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <YoutubeSearchContext.Provider
      value={{
        guitarVideos,
        pianoVideos,
        drumVideos,
        violinVideos,
        saxophoneVideos,
        isLoading,
      }}
    >
      {children}
    </YoutubeSearchContext.Provider>
  );
};
