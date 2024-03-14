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
    <div className="flex mt-10 flex-col grow overflow-auto">
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className="scrollbar-hidden overflow-auto">
          <div className="flex flex-col gap-10">
            {data.entries.map((news, index) => (
              <News news={news} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
