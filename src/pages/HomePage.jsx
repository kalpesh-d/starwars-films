import { gql, useQuery } from "@apollo/client";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import { useState } from "react";
import Pagination from "../components/Pagination";

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

  // console.log(data);
  if (loading) return <Loading value="Loading..." />;

  const indexOfLastPost = currentPage * POSTPERPAGE;
  const indexOfFirstPost = indexOfLastPost - POSTPERPAGE;
  const currentPosts = data.allFilms.films.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <main className="h-fit">
        <MovieList movies={currentPosts} />
      </main>
      <footer>
        <Pagination
          postsPerPage={POSTPERPAGE}
          totalPosts={data.allFilms.totalCount}
          paginate={paginate}
        />
      </footer>
    </>
  );
}

export default HomePage;
