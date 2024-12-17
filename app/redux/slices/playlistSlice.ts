import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistState = SpotifyApi.PlaylistObjectSimplified;

const initialState: PlaylistState = {
  tracks: {
    href: "",
    total: 0,
  },
  collaborative: false,
  description: null,
  id: "",
  images: [],
  name: "",
  owner: {
    external_urls: {
      spotify: "",
    },
    href: "",
    id: "",
    type: "user",
    uri: "",
  },
  public: null,
  snapshot_id: "",
  type: "playlist",
  href: "",
  external_urls: {
    spotify: "",
  },
  uri: "",
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylist: (state, action: PayloadAction<PlaylistState>) => {
      return action.payload;
    },
  },
});

export const { setPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
