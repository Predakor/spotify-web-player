import { useEffect } from 'react';
import useFetchedValue from '@hooks/useFetchedValue';
import useSpotify from '../useSpotify';

function useAlbumInfo(id?: string) {
  const spotifyApi = useSpotify();
  const [fetchedValue, { fetchFail, fetchSucces }] =
    useFetchedValue<SpotifyApi.SingleAlbumResponse>();

  useEffect(() => {
    if (!id) return fetchFail('No id provided');
    const fetchAlbum = async () => {
      try {
        const response = spotifyApi.getAlbum(id);
        const album = (await response).body;
        if (album) fetchSucces(album);
      } catch (error) {
        fetchFail('Album not found');
      }
    };
    fetchAlbum();
  }, [fetchFail, fetchSucces, id, spotifyApi]);

  return fetchedValue;
}
export default useAlbumInfo;
