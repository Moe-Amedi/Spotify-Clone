import { RootState } from "@/app/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import Song from "../Song/Song";

const Songs = () => {
  const tracks = useSelector((state: RootState) => state.song);
  return (
    <div className="flex flex-col text-white px-8 space-y-1 pb-28">
      {tracks.map((item, index) => (
        <Song key={item.track?.id} track={item} order={index} />
      ))}
    </div>
  );
};

export default Songs;
