"use client";
import { shuffle } from "lodash";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { UseHandler } from "./handler";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Songs from "../Songs/Songs";

const Center = () => {
  const { accountType } = UseHandler();
  const { data: session } = useSession();
  const [color, setColor] = useState<string | null>(null);
  const playlist = useSelector((state: RootState) => state.playlist);

  useEffect(() => {
    const colors = [
      "from-indigo-500",
      "from-blue-500",
      "from-green-500",
      "from-red-500",
      "from-yellow-500",
      "from-pink-500",
      "from-purple-500",
    ];
    setColor(shuffle(colors).pop() ?? "from-green-500");
  }, []);
  return (
    <div className="flex-grow text-white h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div
          className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2"
          onClick={() => signOut()}
        >
          {session?.user?.image ? (
            <Image
              className="rounded-full"
              src={session.user.image}
              alt="name"
              width={40}
              height={40}
            />
          ) : (
            <div></div>
          )}
          <h2>{session?.user?.name}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </header>

      {playlist.id != "" ? (
        <div>
          {accountType == "premium" ? (
            <div>
              <section
                className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
              >
                {playlist?.images[0].url ? (
                  <Image
                    src={playlist?.images[0].url}
                    alt="name"
                    height={176}
                    width={176}
                  />
                ) : (
                  <div></div>
                )}
                <div>
                  <p>PLAYLIST</p>
                  <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
                    {playlist?.name}
                  </h1>
                </div>
              </section>
              <div>
                <Songs />
              </div>
            </div>
          ) : (
            <iframe
              className="p-2 h-screen scrollbar-hide"
              src={`https://open.spotify.com/embed/playlist/${playlist.id}`}
              width="100%"
              height="100%"
              allow="encrypted-media"
            ></iframe>
          )}
        </div>
      ) : (
        <div className="flex items-end space-x-7 bg-gradient-to-b to-black from-green-500 h-80 text-white p-8">
          <h1>Please Choose a Playlist</h1>
        </div>
      )}
    </div>
  );
};

export default Center;
