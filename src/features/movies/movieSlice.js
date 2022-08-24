import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get("", {
      params: { s: term, type: "movie", i: "tt3896198" },
    });
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get("", {
      params: { s: term, type: "series", i: "tt3896198" },
    });
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get("", {
      params: { i: id, Plot: "full" },
    });
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMoviesOrShow: {},
  movieLoader: false,
  showLoader: true,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMoviesOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      return { ...state, movieLoader: true };
    },
    [fetchAsyncShows.pending]: (state) => {
      return { ...state, showLoader: true };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload, movieLoader: false };
    },
    [fetchAsyncMovies.rejected]: (state) => {
      return { ...state, movieLoader: false };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload, showLoader: false };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      return { ...state, selectMoviesOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieLoader = (state) => state.movies.movieLoader;
export const getShowLoader = (state) => state.movies.showLoader;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectMoviesOrShow;
export default movieSlice.reducer;
