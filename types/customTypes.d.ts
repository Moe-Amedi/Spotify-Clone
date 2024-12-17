import { User } from "next-auth";
import "next-auth/jwt";

export interface Provider {
  callbackUrl: string;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
}

declare module "next-auth" {
  interface Session {
    error?: string;
    user?: User & {
      accessToken?: string;
      refreshToken?: string;
      username?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    username?: string;
    accessTokenExpires?: number;
    error?: string;
  }
}

declare module "tailwind-scrollbar-hide";

export interface SongProps {
  track: SpotifyApi.PlaylistTrackObject;
  order: number;
}
