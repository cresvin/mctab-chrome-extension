// chrome-extension://jihlohmjipclbgpobdkcmmldokijmnmo/src/pages/installed/index.html

import { faGithub, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mcHeart from "./assets/imgs/mc-heart.png";
import showcase from "./assets/imgs/showcase.png";

export default function Installed() {
  return (
    <main className="flex flex-col p-10 text-center bg-grid-zinc-900 h-screen items-center justify-center">
      <h1 className="text-4xl leading-loose flex items-center gap-2 font-bold">
        Thanks for install
        <img src={mcHeart} alt="Minecraft heart" />
      </h1>
      <p className="text-zinc-400 text-balance">
        A Chrome extension that enhances your Minecraft browsing experience.
      </p>
      <img src={showcase} alt="Showcase image" className="my-10" />
      <section className="space-x-3">
        <a href="https://paypal.me/cresvinn">
          <button className="bg-blue-500 transition-colors hover:bg-blue-400 text-black font-medium px-4 py-2 rounded-md">
            <FontAwesomeIcon icon={faPaypal} className="mr-2" />
            Support me
          </button>
        </a>
        <a href="https://github.com/cresvin/mctab-chrome-extension">
          <button className="bg-zinc-900 transition-colors border border-zinc-800 hover:bg-zinc-800 font-medium px-4 py-2 rounded-md">
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            Github
          </button>
        </a>
      </section>
      <div className="fixed pointer-events-none -top-10 -left-10 w-96 h-96 bg-indigo-500 opacity-20 blur-3xl" />
      <div className="fixed pointer-events-none -bottom-10 -right-10 w-96 h-96 bg-blue-500 opacity-20 blur-3xl" />
    </main>
  );
}
