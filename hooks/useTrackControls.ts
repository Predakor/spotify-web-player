import useSpotify from './useSpotify';

function useTrackControls() {
  const spotifyApi = useSpotify();
  const controls = {
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
        return await (liked
          ? controls.disLikeTrack(id)
          : controls.likeTrack(id));
      } catch (error) {
        throw error;
      }
    },

    checkIFLiked: async (id: string[]) => {
      try {
        return (await spotifyApi.containsMySavedTracks(id)).body;
      } catch (error) {
        console.error(`useTrackContorls ${error}`);
        throw error;
      }
    },
  };
  return controls;
}
export default useTrackControls;
