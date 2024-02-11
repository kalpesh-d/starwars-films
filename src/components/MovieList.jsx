import { Link } from "react-router-dom";
import Movie from "./Movie";

function MovieList({ movies }) {
  return (
    <div className="grid rows justify-center gap-y-4 m-5">
      {movies.map((movie) => (
        <Link to={`/${movie.id}`} key={movie.id}>
          <Movie movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
