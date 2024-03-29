import background from "./assets/imgs/background.jpg";
import NewsContainer from "./components/NewsContainer";
import SearchInput from "./components/SearchInput";

export default function NewTab() {
  return (
    <main
      className="bg-blend-darken bg-black/80 outline -outline-offset-8 outline-zinc-800 h-screen"
      style={{
        backgroundImage: `url(${background}`,
      }}
    >
      <div className="container mx-auto flex flex-col p-10 h-full">
        <SearchInput />
        <NewsContainer />
      </div>
    </main>
  );
}
