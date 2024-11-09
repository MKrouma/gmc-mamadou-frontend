import MovieCard from "./MovieCard"

const MovieList = ({movieData}) => {

    return (
        <>
            { movieData.map(movie => 
                <MovieCard 
                posterURL={movie.posterURL} 
                title={movie.title} 
                description={movie.description} 
                rating={movie.rating}
                key={movie.key}
                isFullDescr={false}
                id={movie.key}
            />
            )}
        </>
    )
}

export default MovieList
