import NextAuth from 'next-auth/next';
import SpotifyProvider from 'next-auth/providers/spotify';
import spotifyApi, { AUTH_URL } from '@utils/spotify';
import { JWT } from 'next-auth/jwt';

interface newToken extends JWT {
  accesToken: string;
  refreshToken: string;
}
async function refreshAccesToken(token: newToken) {
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
      if (account && user) {
        return {
          ...token,
          accesToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at && account.expires_at * 1000,
        };
      }
      if (Date.now() < token.accesTokenExpires) {
        return token;
      }
      return await refreshAccesToken(token as newToken);
    },
    async session({ session, token }) {
      const { accesToken, refreshToken, name } = token as newToken;
      return {
        ...session,
        user: {
          ...session.user,
          accesToken: accesToken,
          refreshToken: refreshToken,
          name: name,
        },
      };
    },
  },
});
