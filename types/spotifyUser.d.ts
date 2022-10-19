import { Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

export interface SpotifyUser extends User {
  id?: string;
  accesToken: string;
  refreshToken: string;
}
export interface SpotifySession extends Session {
  user: SpotifyUser;
  error?: string;
}
export interface SpotifyToken extends JWT {
  accesToken: string;
  accesTokenExpires: number;
  refreshToken: string;
  error?: string;
}
