import React from "react";
import { UseHandler } from "./handler";
import { SongProps } from "@/types/customTypes";
import Image from "next/image";

const Song: React.FC<SongProps> = ({ track, order }) => {
  const { playTrack } = UseHandler();
  return (
    <div
      className="grid grid-cols-2 text-gray-500 py-3 px-4 hover:bg-gray-900 rounded-lg"
      onClick={() => playTrack(track)}
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        {track.track?.album.images[0].url ? (
          <Image
            src={track.track?.album.images[0].url}
            alt="name"
            width={40}
            height={40}
          />
        ) : (
          <div></div>
        )}
        <div>
          <p className="w-36 lg:w-64 truncate text-white">
            {track.track?.name}
          </p>
          <p className="w-40">{track.track?.artists[0].name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="w-40 hidden md:inline">{track.track?.album.name}</p>
        <p>
          {track.track?.duration_ms !== undefined
            ? `${Math.floor(track.track.duration_ms / 60000)
                .toString()
                .padStart(2, "0")} : ${Math.floor(
                (track.track.duration_ms % 60000) / 1000
              )
                .toString()
                .padStart(2, "0")}`
            : "00:00"}
        </p>
      </div>
    </div>
  );
};

export default Song;
