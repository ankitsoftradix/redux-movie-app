import React from "react";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllShows,
  getMovieLoader,
  getShowLoader,
} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import Slider from "react-slick";
import { Settings } from "../../common/settings";
import { Bars } from "react-loader-spinner";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const movieLoader = useSelector(getMovieLoader);
  const showLoader = useSelector(getShowLoader);
  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="movies-error">
        <h3>{shows.error}</h3>
      </div>
    );

  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">
            {movieLoader ? (
              <Bars
                height="80"
                width="80"
                color="#fff"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <Slider {...Settings}>{renderMovies}</Slider>
            )}
          </div>
        </div>
        <div className="show-list">
          <h2>Shows</h2>
          <div className="movie-container">
            {showLoader ? (
              <Bars
                height="80"
                width="80"
                color="#fff"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <Slider {...Settings}>{renderShows}</Slider>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieListing;
