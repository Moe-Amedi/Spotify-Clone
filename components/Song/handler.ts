import {
  CurrentSongState,
  setCurrentSong,
} from "@/app/redux/slices/currentSongSlice";
import useSpotify from "@/hooks/useSpotify";
import { useDispatch } from "react-redux";

export const UseHandler = () => {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();
  const playTrack = (track: SpotifyApi.PlaylistTrackObject) => {
    spotifyApi.play({
      uris: [track.track?.uri ?? ""],
    });
    const Track: CurrentSongState = {
      ...track,
      is_playing: true,
    };
    dispatch(setCurrentSong(Track));
  };
  return { playTrack };
};
