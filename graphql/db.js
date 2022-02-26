const Axios = require('axios');
const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = async (limit, rating) => {
    let newAPI_URL = API_URL;
    //return await Axios.get(`${API_URL}`).then(res => res.data.data.movies);
    if(rating > 0){
        newAPI_URL += `limit=${limit}`;
    }
    if(limit > 0){
        newAPI_URL += `&minimum_rating=${rating}`;
    }
    return await Axios.get(`${newAPI_URL}`).then(res => res.data.data.movies);
};