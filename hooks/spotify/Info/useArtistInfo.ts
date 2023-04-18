import { useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import { useRouter } from 'next/router';
import useSpotify from '../useSpotify';

type Artist = SpotifyApi.ArtistObjectFull;

function useArtistInfo(id?: string) {
  const spotifyApi = useSpotify();
  const { artistid: pageID } = useRouter().query;
  const [artist, actions] = useFetchedValue<Artist>();

  useEffect(() => {
    const fetchArtistData = async () => {
      const artistID = id || pageID;
      if (!artistID) return;
      try {
        const request = await spotifyApi.getArtist(artistID.toString());
        actions.fetchSucces(request.body);
      } catch (error) {
        actions.fetchFail(`${error}`);
      }
    };
    fetchArtistData();
  }, [actions, id, pageID, spotifyApi]);

  return artist;
}

export default useArtistInfo;
