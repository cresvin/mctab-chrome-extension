import { formatDate } from "../utils/formatDate";

export default function News({ news }) {
  return (
    <article className="bg-zinc-900 p-5 rounded-md border border-zinc-800">
      <p className="text-sm text-zinc-400">{formatDate(news.date)}</p>
      <a
        href={news.readMoreLink}
        target="_blank"
        rel="noreferrer"
        className="text-lg leading-loose font-medium hover:underline underline-offset-4"
      >
        {news.title}
      </a>
      <p className="text-sm text-balance text-zinc-400 max-w-2xl">
        {news.text}
      </p>
      <img
        src={`https://launchercontent.mojang.com${news.playPageImage.url}`}
        alt="News image"
        className="mt-5 rounded-md shadow object-fill w-full h-60"
      />
    </article>
  );
}
