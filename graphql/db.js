const Movies = [
    {
        id: "0",
        name: "Asura",
        score: 98
    },
    {
        id: "1",
        name: "Criminal of War",
        score: 100
    },
    {
        id: "2",
        name: "The God Father",
        score: 100
    },
    {
        id: "3",
        name: "The new World",
        score: 95
    },
    {
        id: "4",
        name: "Untouchable",
        score: 94
    },
    {
        id: "5",
        name: "Star Warz",
        score: 90
    },
]

export const getMovies = () => {
    return Movies
};

export const getById = (id) => {
    const movie = Movies.filter((movie) => movie.id === String(id));
    console.log(movie[0]);
    return movie[0];
};

export const deleteMovie = (id) => {
    const cleanMovies = Movies.filter((movie) => movie.id !== id)
    if(cleanMovies.length < Movies.length){
        Movies = cleanMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const movie = {
        id: Movies.length,
        name: name,
        score: score
    };
    Movies.push(movie);
    return movie;
};
