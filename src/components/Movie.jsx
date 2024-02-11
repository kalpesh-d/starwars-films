function Movie({ movie }) {
  return (
    <div className="p-4 h-fit sm:w-24 md:w-96 lg:w-96 border-2 rounded-md border-slate600 hover:border-rose hover:text-rose text-indigo">
      <p className="md:text-base sm:text-xs text-light">
        Star Wars: Episode {movie.episodeID}
      </p>
      <h1 className="lg:text-2xl md:text-xl text-xl font-semibold">
        {movie.title}
      </h1>
      <p className="text-sm font-medium text-light">{movie.director}</p>
      <p className="text-xs mt-2 text-light">{movie.openingCrawl}</p>
    </div>
  );
}

export default Movie;
