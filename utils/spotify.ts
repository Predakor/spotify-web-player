import SpotifyWebApi from 'spotify-web-api-node';

const BASE_LINK = 'https://accounts.spotify.com';
const scopes = [
  'streaming',
  'user-top-read',
  'user-read-email',
  'user-follow-read',
  'user-read-private',
  'user-library-read',
  'user-library-modify',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-recently-played',
  'playlist-read-collaborative',
  'playlist-modify-private',
  'playlist-read-private',
].join(',');
const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const AUTH_URL = `${BASE_LINK}/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

export default spotifyApi;
export { AUTH_URL };
