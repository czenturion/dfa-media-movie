"use client"

import s from "./movie-card.module.scss";

const MovieCard = ({movie}) => {
  return <div className={s.movieCard} key={movie.id}>
    <div className={s.backdrop}>
      <img className={s.background} src={`${process.env.API_GET_IMAGE_URL}w500${movie.backdrop_path
      }`} alt="Movie pic"/>
    </div>
    <h4 className={s.title}>{movie.release_date.slice(0, 4) + ' ' + movie.title}</h4>
    <p className={s.overview}>
      {movie.overview
        ? movie.overview
        : '. . .'}
    </p>
  </div>
}

export default MovieCard;