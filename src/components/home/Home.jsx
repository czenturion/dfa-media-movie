"use client"

import { useEffect } from "react";
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '@/src/api/movies';
import { add, swap} from '@/src/store/reducers';
import s from "./gallery.module.scss";
import MovieCard from "@/src/components/movie-card/MovieCard";
import MovieSlider from "@/src/components/movie-slider/MovieSlider";


const Home = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery(
    'movies',
    fetchMovies,
  );

  const movies = useSelector(state => state.movies.value);

  useEffect(() => {
    if (movies && !isLoading) {
      console.log(data, error)
      dispatch(swap(data))
    }
  }, [data]);

  if (isLoading) return <div className={s.vpnHint}>Loading...</div>;
  if (movies.length === 0) return <h2 className={s.vpnHint}>Please turn on VPN.</h2>

  return <div className={s.gallery}>
    <div>
      {movies
        ? <MovieSlider movies={movies}/>
        : <></>}
    </div>
    <div className={s.searchResult}>
      {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
    </div>
  </div>
};

export default Home;