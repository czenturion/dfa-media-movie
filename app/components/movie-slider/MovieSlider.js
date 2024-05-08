import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {movieImageSize, urlTransform} from "@/app/api/movies";

const MovieSlider = ({movies}) => {

  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      infiniteLoop={true}
      showStatus={false}
    >
      {movies.map(movie => (
        <div
          key={movie.id}
          style={{width: '100%', height: "100%"}}
        >
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
