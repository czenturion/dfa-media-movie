"use client"

import { useEffect } from "react";
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '@/app/api/movies';
import { add, swap} from '@/app/store/reducers';
import s from "./gallery.module.scss";
import MovieCard from "@/app/components/movie-card/MovieCard";


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
    {movies
      ? movies.map(movie => <MovieCard movie={movie}/>)
      : <></>}
  </div>
};

export default Gallery;