import s from "./movie.module.scss";
import {useRouter} from "next/navigation";

const Movie = ({params}) => {
  const router = useRouter()

  return (
    <div className={s.movie}>
      <div style={{height: "400px"}}>

        <button onClick={() => router.back()}>back</button>
        Movie id: {params.id}
      </div>
    </div>
  )
};

export default Movie;
