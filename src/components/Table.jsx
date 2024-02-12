import TableCell from "./TableCell";

function Table({ characters, taleHeading, starships, heading, planets }) {
  return (
    <>
      <h1 className="text-center font-bold uppercase text-2xl mt-5 text-rose">
        {heading}
      </h1>
      <table className="text-left border-collapse">
        <thead>
          <tr>
            {taleHeading.map((element, index) => (
              <th
                key={index}
                className="font-semibold  sticky z-10 top-0 font-semibold text-slate-700  dark:bg-slate-900 dark:text-slate-300"
              >
                {element}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="align-baseline">
          {characters &&
            characters.map((character) => (
              <tr key={character.id}>
                <TableCell>{character.name}</TableCell>
                <TableCell>{character.height}</TableCell>
                <TableCell>{character.gender}</TableCell>
                <TableCell>{character.eyeColor}</TableCell>
              </tr>
            ))}

          {starships &&
            starships.map((starship) => (
              <tr key={starship.id}>
                <TableCell>{starship.model}</TableCell>
                <TableCell>{starship.starshipClass}</TableCell>
                <TableCell>{starship.crew}</TableCell>
              </tr>
            ))}

          {planets &&
            planets.map((planet) => (
              <tr key={planet.id}>
                <TableCell>{planet.name}</TableCell>
                <TableCell>{planet.population}</TableCell>
                <TableCell>{planet.rotationPeriod}</TableCell>
                <TableCell>{planet.orbitalPeriod}</TableCell>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
