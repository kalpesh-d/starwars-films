function Movie({ movie }) {
  console.log(movie);
  return (
    <div className="p-4 h-fit sm:w-24 md:w-96 lg:w-96 border-2 rounded-md border-slate600">
      <p className="md:text-base sm:text-xs">
        Star Wars: Episode {movie.episodeID}
      </p>
      <h1 className="lg:text-2xl md:text-xl text-xl font-semibold text-indigo">
        {movie.title}
      </h1>
      <p className="text-sm font-medium">{movie.director}</p>
      <p className="text-xs mt-2">{movie.openingCrawl}</p>
    </div>
  );
}

export default Movie;
