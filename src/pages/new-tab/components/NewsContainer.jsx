import { useQuery } from "@tanstack/react-query";
import News from "./News";

export default function NewsContainer() {
  const { isPending, error, data } = useQuery({
    queryKey: ["minecraft-news"],
    queryFn: async () => {
      const response = await fetch(
        "https://launchercontent.mojang.com/news.json"
      );
      return response.json();
    },
  });

  return (
    <div className="flex flex-col mt-10 grow overflow-auto">
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className="scrollbar-hidden overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.entries.map((news, index) => (
              <News news={news} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
