import { gql, useQuery } from "@apollo/client";

const ALL_FILMS = gql`
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

function App() {
  const Films = useQuery(ALL_FILMS);
  console.log(Films);
  if (Films.loading) return <div>Loading...</div>;

  return <div>{Films.data.allFilms.films.map((p) => p.title)}</div>;
}

export default App;
