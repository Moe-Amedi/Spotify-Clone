import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CurrentSongState = {
  is_playing: boolean;
  added_at: string;
  added_by: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  track: SpotifyApi.TrackObjectFull | null;
};

const initialState: CurrentSongState = {
  is_playing: false,
  added_at: "",
  added_by: {
    external_urls: {
      spotify: "",
    },
    href: "",
    id: "",
    type: "user",
    uri: "",
  },
  is_local: false,
  track: null,
};

const currentSongSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    setCurrentSong: (state, action: PayloadAction<CurrentSongState>) => {
      return action.payload;
    },
    setPlaybackStatus: (state, action: PayloadAction<boolean>) => {
      state.is_playing = action.payload;
    },
  },
});

export const { setCurrentSong, setPlaybackStatus } = currentSongSlice.actions;
export default currentSongSlice.reducer;
