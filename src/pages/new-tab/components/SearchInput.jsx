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
      className="px-4 border border-zinc-800 py-2 rounded-md outline-none focus:ring ring-yellow-500 bg-zinc-900 placeholder:text-zinc-400 w-full"
      placeholder="Search for anything..."
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSearch(e);
      }}
    />
  );
}
