export default function SearchInput() {
  const handleSearch = (e) => {
    const search = e.target.value;
    const query = `https://www.google.com/search?q=${encodeURIComponent(
      search
    )}`;
    window.location.href = query;
  };

  return (
    <input
      type="text"
      className="px-8 border border-zinc-800 py-4 backdrop-blur-md rounded-md outline-none focus:ring ring-indigo-500 bg-zinc-900/50 placeholder:text-zinc-400 w-full"
      placeholder="Search for anything..."
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSearch(e);
      }}
    />
  );
}
