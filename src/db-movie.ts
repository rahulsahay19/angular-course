export const MOVIES: any = [
    {
        id: 1,
        name: "Titanic",
        iconUrl: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL50_SY1000_CR0,0,671,1000_AL_.jpg',
        directorName: 'James Cameron',
        longDescription: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        genre: 'Romance',
        reviewsCount: 5
    },
    {
        id: 2,
        name: "Die Another Day",
        iconUrl: 'https://m.media-amazon.com/images/M/MV5BODNkYmIwYTMtYzdhNy00YWE3LThkYmEtNzA5ZTE5YmVjYzZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL50_SY1000_SX668_AL_.jpg',
        directorName: 'Lee Tamahori',
        longDescription: "James Bond is sent to investigate the connection between a North Korean terrorist and a diamond mogul, who is funding the development of an international space weapon.",
        genre: 'Action',
        reviewsCount: 5
    },
    {
        id: 3,
        name: "Jurassic Park",
        iconUrl: 'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_QL50_.jpg',
        directorName: 'Steven Spielberg',
        longDescription: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
        genre: 'Action',
        reviewsCount: 6
    },
    {
        id: 4,
        name: "Mission Impossible",
        iconUrl: 'https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg',
        directorName: 'Brian De Palma',
        longDescription: "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.",
        genre: 'Thriller',
        reviewsCount: 7
    },
    {
        id: 5,
        name: "Gone in sixty seconds",
        iconUrl: 'https://m.media-amazon.com/images/M/MV5BMTIwMzExNDEwN15BMl5BanBnXkFtZTYwODMxMzg2._V1_QL50_.jpg',
        directorName: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        longDescription: "A retired master car thief must come back to the industry and steal fifty cars with his crew in one night to save his brother's life",
        genre: 'Action',
        reviewsCount: 7
    },
    {
        id: 6,
        name: "Top Gun",
        iconUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_QL50_SY1000_CR0,0,646,1000_AL_.jpg',
        directorName: 'Tony Scott',
        longDescription: "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
        genre: 'Thriller',
        reviewsCount: 9
    }
];

export function findMovieById(movieId: number) {
    return MOVIES[movieId];
}