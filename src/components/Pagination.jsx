function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex space-x-2 justify-center">
      {pageNumbers.map((number) => (
        <button
          type="button"
          key={number}
          className="px-4 py-2 text-white rounded-md hover:bg-slate800 focus:bg-indigo"
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
