import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";

const Home = () => {
  const movieText = "Harry";
  const fetchMovies = async () => {
    const response = await movieApi
      .get("", { params: { s: movieText, type: "movie" } })
      .catch((err) => console.log("err ==> ", err));
    console.log("response ==> ", response);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
