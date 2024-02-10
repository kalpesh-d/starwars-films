import Movie from "./Movie";

function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieList;
