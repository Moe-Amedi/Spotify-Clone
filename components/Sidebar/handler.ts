import { setPlaylist } from "@/app/redux/slices/playlistSlice";
import { setSong } from "@/app/redux/slices/songSlice";
import useSpotify from "@/hooks/useSpotify";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const UseHandler = () => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [playlists, setPlaylists] =
    useState<SpotifyApi.PlaylistObjectSimplified[]>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  const handlePlaylistChange = async (
    pl: SpotifyApi.PlaylistObjectSimplified
  ) => {
    dispatch(setPlaylist(pl));
    spotifyApi.getPlaylistTracks(pl.id).then((data) => {
      dispatch(setSong(data.body.items));
    });
  };
  return { playlists, handlePlaylistChange };
};
