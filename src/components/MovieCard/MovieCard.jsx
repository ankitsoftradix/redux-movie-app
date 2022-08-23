import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ key, data }) => {
  return (
    <div className="card-item" key={key}>
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-bottom">
          <h4>{data.Title}</h4>
          <p>{data.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
