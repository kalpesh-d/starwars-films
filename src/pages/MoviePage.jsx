import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Table from "../components/Table";

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
        created
        edited
        producers
        characterConnection {
          characters {
            name
            height
            gender
            id
            eyeColor
          }
        }
        starshipConnection {
          starships {
            id
            model
            crew
            starshipClass
          }
        }
        planetConnection {
          planets {
            id
            name
            rotationPeriod
            population
            orbitalPeriod
          }
        }
      }
    }
  `;

  const { loading, data } = useQuery(MOVIE_DETAILS, {
    variables: { id },
  });

  if (loading) return <Loading value="Loading..." />;
  if (!data || !data.film) return <div>No data found</div>;

  return (
    <div className="h-fit flex justify-center mx-5">
      <div className="w-fit xl:w-2/4 lg:w-3/4 md:w-3/4 sm:w-9/12 grid auto-rows-auto gap-y-4 my-20">
        <div className="my-1">
          <span className="text-xl xl:text-2xl text-indigo">
            Star Wars - {data.film.episodeID}
          </span>
          <h1 className="xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl text-3xl font-bold uppercase">
            {data.film.title}
          </h1>
        </div>
        <p className="text-slate400 text-base lg:text-lg">
          {data.film.openingCrawl}
        </p>
        <div className="text-slate400">
          <p>
            <span className="text-lg font-semibold">Director: </span>
            {data.film.director}
          </p>
          <p>
            <span className="text-lg font-semibold">Release Date: </span>
            {data.film.releaseDate}
          </p>
          <p>
            <span className="text-lg font-semibold">Producer: </span>
            {data.film.producers.map((producer, index) => (
              <span key={index}>
                {index > 0 && ", "}
                {producer}
              </span>
            ))}
          </p>
        </div>
        <Table
          characters={data.film.characterConnection.characters}
          taleHeading={["Name", "Height", "Gender", "Eye Color"]}
          heading="Characters"
        />
        <Table
          starships={data.film.starshipConnection.starships}
          taleHeading={["Model", "Starship Class", "crew"]}
          heading="Starships"
        />
        <Table
          planets={data.film.planetConnection.planets}
          taleHeading={[
            "Model",
            "Population",
            "Rotation Period",
            "Orbital Period",
          ]}
          heading="Planets"
        />
      </div>
    </div>
  );
}

export default MoviePage;
