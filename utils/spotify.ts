import SpotifyWebApi from 'spotify-web-api-node';

const scopes = [
  'streaming',
  'user-read-email',
  'user-read-private',
  'user-library-read',
  'user-library-modify',
  'user-read-playback-state',
  'user-modify-playback-state',
].join(',');

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const AUTH_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

export default spotifyApi;
export { AUTH_URL };
