"use client"

import { useEffect } from "react";
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '@/app/api/movies';
import { add, swap} from '@/app/store/reducers';
import s from "./gallery.module.scss";


const Gallery = () => {
  const movies = useSelector(state => state.movies.value);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery(
    'movies',
    fetchMovies,
  );

  useEffect(() => {
    if (data) dispatch(add(data))
    if (movies && data) dispatch(swap(data))
  }, [data]);

  console.log(movies, error)

  if (isLoading) return <div>Loading...</div>;

  return <div className={s.gallery}>
    {movies ? movies.map(movie => (
      <div className={s.movieCard} key={movie.id}>
        <h4 className={s.title}>{movie.title}</h4>
        <p className={s.overview}>{movie.overview}</p>
      </div>
    )) : <></>}
  </div>
};

export default Gallery;