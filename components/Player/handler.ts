import { setPlaybackStatus } from "@/app/redux/slices/currentSongSlice";
import { RootState } from "@/app/redux/store";
import useSpotify from "@/hooks/useSpotify";
import { debounce } from "lodash";
// import { useSession } from "next-auth/react";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UseHandler = () => {
  const track = useSelector((state: RootState) => state.currentSong);
  const dispatch = useDispatch();
  const spotifyApi = useSpotify();
  const [volume, setVolume] = useState<number>(50);

  const handlePlayState = async () => {
    try {
      switch (track.is_playing) {
        case true:
          await spotifyApi.pause();
          dispatch(setPlaybackStatus(false));
          break;

        case false:
          await spotifyApi.play();
          dispatch(setPlaybackStatus(true));
          break;
      }
    } catch (error) {
      console.log("Your error is: ", error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedAdjustVolume = useCallback(
    debounce((vol: number) => {
      spotifyApi.setVolume(vol).catch((error) => {
        console.log(error);
      });
    }, 25),
    []
  );

  return { handlePlayState, volume, debouncedAdjustVolume, setVolume };
};
