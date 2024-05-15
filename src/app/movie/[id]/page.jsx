"use client"

import { useParams } from "next/navigation";
import Movie from "@/src/components/movie/Movie";
import { useQuery } from "react-query";
import { fetchMovieById } from "@/src/api/movies";
import { useEffect } from "react";


const MoviePage = () => {
  const params = useParams()
  // const { data, error, isLoading } = useQuery(['movie', params.id], fetchMovieById);
  //
  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  return <Movie id={params.id} />
}

export default MoviePage;