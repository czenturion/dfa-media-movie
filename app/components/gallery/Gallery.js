"use client"

import { useEffect } from "react";
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '@/app/api/movies';
import { add, swap} from '@/app/store/reducers';
import s from "./gallery.module.scss";


const Gallery = () => {
  const movies = useSelector(state => state.movies.value)
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery(
    'movies',
    fetchMovies,
  );

  useEffect(() => {
    if (data) dispatch(add(data))
  }, [data]);

  console.log(movies)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div className={s.gallery}>
    {movies ? movies.map(movie => (
      <div className={s.movieCard} key={movie.id}>
        {movie.title}
      </div>
    )) : <></>}
  </div>
}

export default Gallery;