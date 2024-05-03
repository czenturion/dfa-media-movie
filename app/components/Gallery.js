import {useState} from "react";
import {useQuery} from "react-query";

const Gallery = () => {
  const [movies, setMovies] = useState([]);
  const {data, error, isLoading} = useQuery(
    'movies',
    async () => {
      const res = await fetch('')
    }
  );

}