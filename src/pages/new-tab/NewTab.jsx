import NewsContainer from "./components/NewsContainer";
import Search from "./components/Search";

export default function NewTab() {
  return (
    <main className="bg-grid-zinc-900 h-screen">
      <div className="container mx-auto flex flex-col p-10 h-full">
        <Search />
        <NewsContainer />
      </div>
    </main>
  );
}
