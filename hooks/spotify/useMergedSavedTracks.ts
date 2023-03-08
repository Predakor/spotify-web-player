import { useEffect, useState } from 'react';
import { LikedTrack, Track } from 'types/spotifyTypes';
import useTrackControls from './controls/useTrackControls';

type mergedTracks = {
  tracks: LikedTrack[];
  ready: boolean;
};

export default function useMergedSavedTracks(fetchedTracks: Track[]) {
  const [result, setResult] = useState<mergedTracks>({
    tracks: [],
    ready: false,
  });
  const { checkIFLiked } = useTrackControls();

  useEffect(() => {
    if (!fetchedTracks.length) return setResult({ tracks: [], ready: true });
    setResult(({ tracks }) => ({ tracks, ready: false }));

    const trackIds = fetchedTracks.map((track) => track.id);

    checkIFLiked(trackIds).then((likedSongs) => {
      const likedTracks = new Array<LikedTrack>(likedSongs.length);

      for (let index = 0; index < likedSongs.length; index++) {
        const liked = likedSongs[index];
        const track = fetchedTracks[index];
        likedTracks[index] = { ...track, liked };
      }
      setResult({ tracks: likedTracks, ready: true });
    });
  }, [checkIFLiked, fetchedTracks]);

  return result;
}
