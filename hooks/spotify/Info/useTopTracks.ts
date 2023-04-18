import { useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import useSpotify from '../useSpotify';

function useArtist(id: string) {
  const spotifyApi = useSpotify();
  const [topTracks, actions] =
    useFetchedValue<SpotifyApi.ArtistsTopTracksResponse>();

  useEffect(() => {
    const getArtistTopTracks = async () => {
      try {
        const response = await spotifyApi.getArtistTopTracks(id, 'US');
        actions.fetchSucces(response.body);
      } catch (error) {
        actions.fetchFail(`${error}`);
      }
    };
    getArtistTopTracks();
  }, [actions, id, spotifyApi]);

  return topTracks;
}
export default useArtist;
