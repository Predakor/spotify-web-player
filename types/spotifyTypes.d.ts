export type SearchType =
  | 'playlist'
  | 'album'
  | 'artist'
  | 'track'
  | 'show'
  | 'episode';

export type SearchCategories =
  | 'playlists'
  | 'albums'
  | 'artists'
  | 'tracks'
  | 'shows'
  | 'episodes';

export type RepeatState = 'off' | 'context' | 'track';

export type SearchResult = SpotifyApi.SearchResponse;

export type Track = SpotifyApi.TrackObjectFull;
export type LikedTrack = SpotifyApi.TrackObjectFull & { liked: boolean };

export type TopTracks = SpotifyApi.ArtistsTopTracksResponse;
