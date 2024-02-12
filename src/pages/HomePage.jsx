import { gql, useQuery } from "@apollo/client";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

const ALL_MOVIES = gql`
  query Query($first: Int, $after: String) {
    allFilms(first: $first, after: $after) {
      films {
        director
        id
        releaseDate
        title
        episodeID
        openingCrawl
      }
      totalCount
    }
  }
`;

const POSTPERPAGE = 2;

function HomePage() {
  const { loading, data } = useQuery(ALL_MOVIES);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  // console.log(search);
  // console.log(data);
  if (loading) return <Loading value="Loading..." />;

  const filteredMovies = search
    ? data.allFilms.films.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    : data.allFilms.films;

  const sortedMovies = [...filteredMovies].sort(
    (a, b) => a.episodeID - b.episodeID
  );

  const totalPosts = search ? filteredMovies.length : data.allFilms.totalCount;

  const indexOfLastPost = currentPage * POSTPERPAGE;
  const indexOfFirstPost = indexOfLastPost - POSTPERPAGE;
  const currentPosts = sortedMovies.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <header>
        <SearchBar search={search} onSearch={setSearch} />
      </header>
      <main className="h-fit">
        <MovieList movies={currentPosts} />
      </main>
      <footer>
        <Pagination
          postsPerPage={POSTPERPAGE}
          totalPosts={totalPosts}
          paginate={paginate}
        />
      </footer>
    </>
  );
}

export default HomePage;
