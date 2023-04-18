import { useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import { useRouter } from 'next/router';
import { Track } from 'types/spotifyTypes';
import useSpotify from '../useSpotify';

function useTrackInfo(id?: string) {
  const spotifyApi = useSpotify();
  const { trackid } = useRouter().query;
  const [fetchedValue, actions] = useFetchedValue<Track>();

  useEffect(() => {
    const trackID = id ?? trackid?.toString();
    if (!trackID) return actions.fetchFail('No id provided');
    const fetchTrack = async () => {
      try {
        const request = await spotifyApi.getTrack(trackID);
        actions.fetchSucces(request.body);
      } catch (error) {
        actions.fetchFail('Something went wrong while looking for this track');
      }
    };
    fetchTrack();
  }, [actions, id, spotifyApi, trackid]);

  return fetchedValue;
}
export default useTrackInfo;
