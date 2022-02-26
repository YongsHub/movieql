import { getMovies } from "./db.js";


export const resolvers = {
    Query: { // Read
        Movies: (_, { limit, rating }) => getMovies(limit, rating)
    },
};