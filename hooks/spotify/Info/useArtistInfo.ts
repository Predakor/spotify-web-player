import { useRef, useState } from 'react';
import useSpotify from '../useSpotify';

function useArtistInfo() {
  const spotifyApi = useSpotify();

  const artistRef = useRef({
    getArtistTopTracks: async (id: string) => {
      try {
        const response = await spotifyApi.getArtistTopTracks(id, 'US');
        return response.body;
      } catch (error) {
        console.error(error + ' in spotify controls');
      }
    },
    fetchArtistInfo: async (id: string) => {
      try {
        const response = await spotifyApi.getArtist(id);
        return response.body;
      } catch (error) {
        console.error(`error in useArtistInfo ${error}`);
      }
    },
  });
  return artistRef.current;
}
export default useArtistInfo;
