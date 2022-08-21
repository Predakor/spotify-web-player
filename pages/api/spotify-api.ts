// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = '';
const API_AUTH = `https://accounts.spotify.com/authorize?`;

const CLIENT_ID = '8fbfe3145bd04bd48f730d4b654f5603';
const CLIENT_SECRET = '7a84ba72a7344870a405b648b1f2bb2c';

const SCOPE = `
  streaming
  user-read-email
  user-read-private
  user-library-read
  user-library-modify
  user-read-playback-state
  user-modify-playback-state
  `;
const redirect_uri = 'http://localhost:3000/callback';

async function fetchAuth() {
  const authUrl = `${API_AUTH}client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=${SCOPE}`;
  const encodedUri = encodeURI(authUrl);
  const result = fetch(encodedUri);
  console.log(await result);
}
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' });
// }
