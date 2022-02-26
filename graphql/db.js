const Axios = require('axios');
const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = async (limit, rating) => {
    return await Axios.get(`${API_URL}`).then(res => res.data.data.movies);
};