import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {movieImageSize, urlTransform} from "@/src/api/movies";

const MovieSlider = ({movies}) => {

  return (
    <Carousel
      autoPlay
      showThumbs={false}
      infiniteLoop={true}
      showStatus={false}
      dynamicHeight={true}
    >
      {movies.map(movie => (
        <div key={movie.id}>
          <img
            src={urlTransform.fetchMovieImage(movieImageSize.original, movie.backdrop_path)}
            alt="Poster"
          />
        </div>))
      }
    </Carousel>
  )
}

export default MovieSlider;
