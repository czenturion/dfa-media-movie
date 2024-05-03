"use client"
import {useQuery} from "react-query";
import {fetchMovies} from "@/app/api/movies";



const Gallery = () => {
  const {data, error, isLoading} = useQuery(
    'movies',
    fetchMovies,
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data)

  return <div>
    {data ? data.map(movie => (
      <div key={movie.id}>
        {movie.title}
      </div>
    )) : <p>Empty</p>}
  </div>
}

export default Gallery;