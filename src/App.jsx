import { gql, useQuery } from "@apollo/client";
const ALL_MOVIES = gql`
  query Query($after: String) {
    allFilms(first: 2, after: $after) {
      films {
        director
        id
        releaseDate
        title
        episodeID
        openingCrawl
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

import MovieList from "./components/MovieList";
import Loading from "./components/Loading";

function App() {
  const { loading, data } = useQuery(ALL_MOVIES);

  // console.log(data);

  if (loading) return <Loading value="Loading..." />;

  return (
    <>
      <main className="h-screen">
        <MovieList movies={data.allFilms.films} />
      </main>
    </>
  );
}

export default App;
