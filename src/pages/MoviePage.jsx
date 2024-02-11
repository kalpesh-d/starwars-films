import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function MoviePage() {
  const { id } = useParams();

  const MOVIE_DETAILS = gql`
    query GetMovie($id: ID!) {
      film(id: $id) {
        director
        id
        releaseDate
        title
        episodeID
        openingCrawl
      }
    }
  `;

  const { loading, data } = useQuery(MOVIE_DETAILS, {
    variables: { id },
  });

  if (loading) return <Loading value="Loading..." />;
  if (!data || !data.film) return <div>No data found</div>;

  return (
    <div className="h-fit flex justify-center">
      <div className="w-8/12 grid rows gap-y-4 m-5">
        <h1>{data.film.title}</h1>
        <p>Director: {data.film.director}</p>
        <p>Release Date: {data.film.releaseDate}</p>
        <p>Episode ID: {data.film.episodeID}</p>
        <p>Opening Crawl: {data.film.openingCrawl}</p>
      </div>
    </div>
  );
}

export default MoviePage;
