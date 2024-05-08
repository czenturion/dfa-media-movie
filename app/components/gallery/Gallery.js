"use client"

import { useEffect } from "react";
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '@/app/api/movies';
import { add, swap} from '@/app/store/reducers';
import s from "./gallery.module.scss";
import MovieCard from "@/app/components/movie-card/MovieCard";
import MovieSlider from "@/app/components/movie-slider/MovieSlider";


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

  if (isLoading) return <div>Loading...</div>;

  return <div className={s.gallery}>
    <div style={{width: "100%"}}>
    <MovieSlider movies={movies}/>
    </div>
    <div className={s.searchResult}>
      {movies
        ? movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
        : <></>}
    </div>
  </div>
};

export default Gallery;