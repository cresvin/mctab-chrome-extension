import "@/index.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { createRoot } from "react-dom/client";
import Installed from "./Installed";

function init() {
  const rootContainer = document.querySelector("#root");
  if (!rootContainer) throw new Error("Can't find root element");

  const root = createRoot(rootContainer);
  root.render(<Installed />);
}

init();
