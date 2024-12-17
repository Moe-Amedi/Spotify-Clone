import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./slices/playlistSlice";
import songReducer from "./slices/songSlice";
import currentSongReducer from "./slices/currentSongSlice";

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    song: songReducer,
    currentSong: currentSongReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
