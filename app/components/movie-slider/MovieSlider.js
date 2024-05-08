import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MovieSlider = ({movies}) => {

  return (
    <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
      {movies.map(movie => (
        <div key={movie.id} style={{width: '100%', height: "100%"}}>
          <img src={`${process.env.API_GET_IMAGE_URL}w500${movie.backdrop_path}`} alt="Poster"/>
        </div>))}
    </Carousel>
  )
}

export default MovieSlider;
