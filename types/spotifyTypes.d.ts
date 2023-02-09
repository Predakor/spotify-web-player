export type searchType =
  | 'album'
  | 'artist'
  | 'playlist'
  | 'track'
  | 'show'
  | 'episode';

export type RepeatState = 'off' | 'context' | 'track';

export type LikedTrack = SpotifyApi.TrackObjectFull & { liked: boolean };
