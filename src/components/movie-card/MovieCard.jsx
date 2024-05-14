"use client"

import { movieImageSize, urlTransform } from "@/src/api/movies";
import s from "./movie-card.module.scss";
import Link from "next/link";
import {imagePaths} from "@/src/consts/consts";

const MovieCard = ({movie}) => {
  return <div className={s.movieCard} key={movie.id}>
    <div className={s.backdrop}>
      <img
        className={s.background}
        src={urlTransform.fetchMovieImage(movieImageSize.small, movie.backdrop_path) || imagePaths.noPhotoSmall}
        alt="Movie poster"
      />
      <div className={s.overview}>
        {movie.overview
          ? movie.overview
          : '. . .'}
      </div>
    </div>
    <div>
      <Link className={s.title} href={`/movie/${movie.id}`}>{movie.title}</Link>
      <p className={s.year}>{movie.release_date.slice(0, 4)}</p>
    </div>
  </div>
}

export default MovieCard;