import { formatDate } from "../utils/formatDate";

export default function NewsCard({ news }) {
  return (
    <article
      type="button"
      onClick={() => (window.location.href = news.readMoreLink)}
      className="bg-zinc-900/50 hover:border-indigo-500 backdrop-blur-md flex flex-col p-5 rounded-md border border-zinc-800"
    >
      <p className="text-sm text-zinc-400">{formatDate(news.date)}</p>
      <h2 className="text-lg leading-loose font-medium">{news.title}</h2>
      <p className="text-sm text-balance text-zinc-400 max-w-2xl">
        {news.text}
      </p>
      <img
        src={`https://launchercontent.mojang.com${news.playPageImage.url}`}
        alt="News image"
        className="mt-5 rounded-md shadow grow w-full object-cover"
      />
    </article>
  );
}
