const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <input
      type="text"
      placeholder="Search animals..."
      value={search}
      onChange={(e) =>
        setSearch(
          e.target.value
        )
      }
      className="border p-3 rounded w-full mb-6"
    />
  );
};

export default SearchBar;