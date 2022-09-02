import { useEffect, useState } from 'react';
import useSpotify from './useSpotify';

export default function useSongInfo() {
  const spotifyApi = useSpotify();
  const [currentTrackID, setCurrentTrackID] = useState();

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (!currentTrackID) return;

      const trackInfo = (await spotifyApi.getTrack(currentTrackID)).body;
      console.log(spotifyApi.getMyCurrentPlayingTrack());
    };
    fetchSongInfo();
  }, [currentTrackID, spotifyApi]);

  return;
}
