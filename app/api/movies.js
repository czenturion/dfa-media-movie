import axios from "axios";

const options = {
  method: 'GET',
  params: {
    include_adult: false,
    include_video: false,
    language: 'ru-RU',
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
