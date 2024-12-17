import useSpotify from "@/hooks/useSpotify";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const UseHandler = () => {
  const spotifyApi = useSpotify();
  const [accountType, setAccountType] = useState<undefined | string>();
  const { data: session } = useSession();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getMe()
        .then((response) => {
          setAccountType(response.body.product);
        })
        .catch((error) => console.log(error));
    }
  }, [session, spotifyApi]);

  return { accountType };
};
