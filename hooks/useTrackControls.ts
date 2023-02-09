import { useRef } from 'react';
import useSpotify from './useSpotify';

function useTrackControls() {
  const spotifyApi = useSpotify();

  const controlsRef = useRef({
    likeTrack: async (id: string[]) => {
      try {
        await spotifyApi.addToMySavedTracks(id);
        return true;
      } catch (error) {
        console.error(`useTrackContorls ${error}`);
        throw error;
      }
    },
    disLikeTrack: async (id: string[]) => {
      try {
        await spotifyApi.removeFromMySavedTracks(id);
        return false;
      } catch (error) {
        console.error(`useTrackContorls ${error}`);
        throw error;
      }
    },
    toogleLikeState: async (id: string[], liked: boolean) => {
      try {
        const { disLikeTrack, likeTrack } = controlsRef.current;
        return await (liked ? disLikeTrack(id) : likeTrack(id));
      } catch (error) {
        throw error;
      }
    },

    checkIFLiked: async (ids: string[]) => {
      try {
        if (ids.length > 50) ids = ids.slice(0, 49);
        return (await spotifyApi.containsMySavedTracks(ids)).body;
      } catch (error) {
        console.error(`useTrackContorls ${error}`);
        throw error;
      }
    },
  });
  return controlsRef.current;
}
export default useTrackControls;
