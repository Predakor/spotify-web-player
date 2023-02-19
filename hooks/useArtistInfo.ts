import { useState, useEffect } from 'react';
import useSpotify from './useSpotify';

function useArtistInfo(id: string) {
  const spotifyApi = useSpotify();
  const [artist, setArtist] = useState<SpotifyApi.ArtistObjectFull | null>();

  useEffect(() => {
    if (!id) return;
    const fetchArtistInfo = async () => {
      try {
        const result = (await spotifyApi.getArtist(id)).body;
        setArtist(result);
      } catch (error) {
        setArtist(null);
      }
    };
    fetchArtistInfo();
  }, [id, spotifyApi]);
  return artist;
}
export default useArtistInfo;
