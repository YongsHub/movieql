import { getMovies } from "./db.js";


export const resolvers = {
    Query: { // Read
        Movies: () => getMovies()
    },
};