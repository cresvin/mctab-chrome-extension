import { formatDate } from "../utils/formatDate";

export default function News({ news }) {
  return (
    <article>
      <div className="flex text-zinc-400 items-center">
        <div className="text-sm bg-yellow-500 text-black rounded-md p-1">
          {news.category}
        </div>
        <span className="mx-2">•</span>
        <p className="text-sm">{formatDate(news.date)}</p>
      </div>
      <a
        href={news.readMoreLink}
        target="_blank"
        rel="noreferrer"
        className="text-2xl leading-loose font-medium hover:underline underline-offset-4"
      >
        {news.title}
      </a>
      <p className="text-sm text-balance text-zinc-400 max-w-2xl">
        {news.text}
      </p>
      <img
        src={`https://launchercontent.mojang.com${news.playPageImage.url}`}
        alt="News image"
        className="mt-5 rounded-md shadow object-fill w-96 h-60"
      />
    </article>
  );
}
