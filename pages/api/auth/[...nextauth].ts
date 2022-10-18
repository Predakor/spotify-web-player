import NextAuth from 'next-auth/next';
import SpotifyProvider from 'next-auth/providers/spotify';
import spotifyApi, { AUTH_URL } from '@utils/spotify';
import { SpotifySession, SpotifyToken } from 'types/spotifyUser';

async function refreshAccesToken(token: SpotifyToken): Promise<SpotifyToken> {
  try {
    spotifyApi.setAccessToken(token.accesToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    return {
      ...token,
      accesToken: refreshedToken.access_token,
      accesTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccesTokenError',
    };
  }
}
export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.CLIENT_ID ?? '',
      clientSecret: process.env.CLIENT_SECRET ?? '',
      authorization: AUTH_URL,
    }),
  ],
  secret: process.env.CLIENT_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      const spotifyToken = token as SpotifyToken;

      if (account && user) {
        return {
          ...token,
          accesToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at && account.expires_at * 1000,
        };
      }
      if (Date.now() < spotifyToken.accesTokenExpires) return spotifyToken;

      return await refreshAccesToken(spotifyToken);
    },
    async session({ session, token }): Promise<SpotifySession> {
      const { accesToken, refreshToken } = token as SpotifyToken;
      return {
        ...session,
        user: {
          ...session.user,
          accesToken: accesToken,
          refreshToken: refreshToken,
        },
      };
    },
  },
});
