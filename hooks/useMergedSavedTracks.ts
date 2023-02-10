import { useEffect, useState } from 'react';
import { Track } from '@components/Playlist/PlaylistTracks/PlaylistTracks';
import { LikedTrack } from 'types/spotifyTypes';
import useTrackControls from './useTrackControls';

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
    setResult(({ tracks }) => ({ tracks: tracks, ready: false }));
    const validTracks = fetchedTracks.filter(({ track }) => track);
    const fullTracks = validTracks.map(({ track }) => track);
    const trackIds = fullTracks.map(({ id }) => id);

    checkIFLiked(trackIds).then((likedSongs) => {
      const newLikedTracks = new Array<LikedTrack>(likedSongs.length);

      for (let index = 0; index < likedSongs.length; index++) {
        const liked = likedSongs[index];
        const track = fullTracks[index];
        newLikedTracks[index] = { ...track, liked };
      }
      setResult({ tracks: newLikedTracks, ready: true });
    });
  }, [checkIFLiked, fetchedTracks]);

  return result;
}
