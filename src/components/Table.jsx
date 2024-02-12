import TableCell from "./TableCell";

function Table({ characters, heading }) {
  return (
    <>
      <h1 className="text-center font-bold uppercase text-2xl mt-5 text-rose">
        Characters
      </h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {heading.map((element, index) => (
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
          {characters.map((character) => (
            <tr key={character.id}>
              <TableCell>{character.name}</TableCell>
              <TableCell>{character.height}</TableCell>
              <TableCell>{character.gender}</TableCell>
              <TableCell>{character.eyeColor}</TableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
