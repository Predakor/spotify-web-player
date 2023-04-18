import { useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import useSpotify from '../useSpotify';

type ReleatedArtists = SpotifyApi.ArtistsRelatedArtistsResponse;
function useReleatedArtists(id: string) {
  const [artists, actions] = useFetchedValue<ReleatedArtists>();
  const spotifyApi = useSpotify();

  useEffect(() => {
    const fetch = async () => {
      try {
        const request = await spotifyApi.getArtistRelatedArtists(id);
        actions.fetchSucces(request.body);
      } catch (error) {
        actions.fetchFail(`${error}`);
      }
    };
    fetch();
  }, [actions, id, spotifyApi]);

  return artists;
}

export default useReleatedArtists;
