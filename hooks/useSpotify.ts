import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

function useSpotify() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      if (
        session?.error === "RefreshAccessTokenError" ||
        !session?.user?.accessToken
      ) {
        signIn();
      }

      if (session.user && session.user.accessToken) {
        spotifyApi.setAccessToken(session.user.accessToken);
      }
    }
  }, [session]);
  return spotifyApi;
}

export default useSpotify;
