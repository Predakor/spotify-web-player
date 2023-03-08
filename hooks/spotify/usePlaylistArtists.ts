import { useMemo } from 'react';

type artistWithTracksNumber = {
  artist: SpotifyApi.ArtistObjectSimplified;
  tracks: number;
};

//get all artists in playlist sorted descending by amount of tracks they created in selected playlist
//eg first artist in array, created the most track in this playlist
function usePlaylistArtists(playlist: SpotifyApi.PlaylistObjectFull) {
  const tracks = playlist.tracks.items;
  const result = useMemo(() => {
    if (!tracks.length) return [];

    const artistMap: Map<string, artistWithTracksNumber> = new Map();

    tracks.forEach((item) => {
      if (!item.track) return;
      const { artists } = item.track;
      artists.forEach((artist) => {
        const artistTracks = artistMap.get(artist.id)?.tracks ?? 0;
        artistMap.set(artist.id, { artist: artist, tracks: artistTracks + 1 });
      });
    });

    const sortedArtistsMap = new Map(
      [...artistMap.entries()].sort(
        ([, valueA], [, valueB]) => valueB.tracks - valueA.tracks
      )
    );

    return [...sortedArtistsMap.values()];
  }, [playlist.id]);
  return result;
}
export default usePlaylistArtists;
