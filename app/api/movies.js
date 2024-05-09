import axios from "axios";

const options = {
  method: 'GET',
  params: {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    page: 1,
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.API_ACCESS_KEY,
  }
};

export const fetchMovies = async () => {
  try {
    const res = await axios(process.env.API_GET_MOVIES_URL, options);
    return res.data.results
  } catch (er) {
    console.log(er);
    return [];
  }
};

export const movieImageSize = {
  small: 'w500',
  original: 'original'
}

export const urlTransform = {
  fetchMovieImage: (size, backdropPath) => {
    return new URL(process.env.API_GET_IMAGE_URL + size + backdropPath).toString()
  }
}