import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SongState = SpotifyApi.PlaylistTrackObject[];

const initialState: SongState = [];

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSong: (state, action: PayloadAction<SongState>) => {
      return action.payload;
    },
  },
});

export const { setSong } = songSlice.actions;
export default songSlice.reducer;
