import s from "./movie.module.scss";
import { useRouter } from "next/navigation";
import {useQuery, useQueryClient} from "react-query";
import { fetchMovieById } from "@/src/api/movies";
import { useEffect } from "react";

const Movie = ({ id }) => {
  const router = useRouter()

  return (
    <div className={s.movie}>
      <div>
        Movie id: {id}
        <button
          className={s.backBtn}
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </div>
  )
};

export default Movie;
