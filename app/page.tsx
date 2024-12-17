"use client";
import Center from "@/components/Center/Center";
import Player from "@/components/Player/Player";
import Sidebar from "@/components/Sidebar/Sidebar";
import useSpotify from "@/hooks/useSpotify";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
// import { signOut } from "next-auth/react";
// import Image from "next/image";

export default function Home() {
  const spotifyApi = useSpotify();
  const [accountType, setAccountType] = useState<undefined | string>();
  const { data: session } = useSession();
  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getMe()
        .then((response) => {
          console.log("Account Type", response);
          setAccountType(response.body.product);
        })
        .catch((error) => console.log(error));
    }
  }, [session, spotifyApi]);
  return (
    <div className="bg-black h-screen overflow-hidden">
      <div className="flex">
        <Sidebar />
        <Center />
      </div>

      {accountType == "premium" ? (
        <div className="sticky bottom-0">
          <Player />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
