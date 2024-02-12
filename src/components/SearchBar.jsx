function SearchBar({ search, onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="flex justify-center m-10">
      <div className="w-96">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search..."
          className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none bg-dark focus:border-rose"
        />
      </div>
    </nav>
  );
}

export default SearchBar;
