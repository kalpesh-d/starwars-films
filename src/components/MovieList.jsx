import Movie from "./Movie";

function MovieList({ movies }) {
  return (
    <div className="grid rows justify-center gap-y-4 m-5">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieList;
