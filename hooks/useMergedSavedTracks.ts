import { useEffect, useState } from 'react';
import { Track } from '@components/Playlist/PlaylistTracks/PlaylistTracks';
import spotifyApi from '@utils/spotify';
import { LikedTrack } from 'types/spotifyTypes';
import useTrackControls from './useTrackControls';

type mergedTracks = {
  tracks: LikedTrack[];
  ready: boolean;
};

export default function useMergedSavedTracks(fetchedTracks: Track[]) {
  spotifyApi.getPlaylistTracks;
  const [result, setResult] = useState<mergedTracks>({
    tracks: [],
    ready: false,
  });
  const { checkIFLiked } = useTrackControls();

  useEffect(() => {
    setResult(({ tracks }) => ({ tracks: tracks, ready: false }));

    const validTracks = fetchedTracks.filter((track) => track.track?.id);
    if (!validTracks.length) return setResult({ tracks: [], ready: true });

    const fullTracks = validTracks.flatMap(({ track }) =>
      track?.id ? track : []
    );
    if (!fullTracks.length) return setResult({ tracks: [], ready: true });
    const trackIds = fullTracks.map((track) => track.id);

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
