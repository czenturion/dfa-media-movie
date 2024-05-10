"use client"

import { useParams } from "next/navigation";
import Movie from "@/src/components/movie/Movie";


const MoviePage = () => {
  const params = useParams()

  return <Movie params={params} />
}

export default MoviePage;