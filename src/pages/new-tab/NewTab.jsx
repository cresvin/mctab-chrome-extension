import NewsContainer from "./components/NewsContainer";
import SearchInput from "./components/SearchInput";

export default function NewTab() {
  return (
    <main className="bg-grid-zinc-900 h-screen">
      <div className="container mx-auto flex flex-col p-10 h-full">
        <SearchInput />
        <NewsContainer />
      </div>
    </main>
  );
}
