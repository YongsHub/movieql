import { getMovies, getById, addMovie} from "./db";


const resolvers = {
    Query: { // Read
        Movies: () => getMovies(),
        Movie: (_, { id }) => getById(id), 
    },
    Mutation: { // Create, Update, Delete
        addMovie: (_, {name, score}) => addMovie(name, score),
    }
};

export default resolvers