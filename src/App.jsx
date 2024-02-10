import { gql, useQuery } from "@apollo/client";
const ALL_MOVIES = gql`
  query Query($after: String, $before: String, $first: Int, $last: Int) {
    allFilms(after: $after, before: $before, first: $first, last: $last) {
      films {
        director
        id
        releaseDate
        title
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
      <main className="grid rows">
        <MovieList movies={data.allFilms.films} />
      </main>
    </>
  );
}

export default App;
