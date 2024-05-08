"use client"

import { movieImageSize, urlTransform } from "@/app/api/movies";
import s from "./movie-card.module.scss";

const MovieCard = ({movie}) => {
  return <div className={s.movieCard} key={movie.id}>
    <div className={s.backdrop}>
      <img
        className={s.background}
        src={urlTransform.fetchMovieImage(movieImageSize.small, movie.backdrop_path)}
        alt="Movie poster"
      />
      <div className={s.overview}>
        {movie.overview
          ? movie.overview
          : '. . .'}
      </div>
    </div>
    <div>
      <h4 className={s.title}>{movie.title}</h4>
      <p className={s.year}>{movie.release_date.slice(0, 4)}</p>
    </div>
  </div>
}

export default MovieCard;