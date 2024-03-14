import "@/index.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import NewTab from "./NewTab";

function init() {
  const rootContainer = document.querySelector("#root");
  if (!rootContainer) throw new Error("Can't find root element");

  const root = createRoot(rootContainer);
  const queryClient = new QueryClient();

  root.render(
    <QueryClientProvider client={queryClient}>
      <NewTab />
    </QueryClientProvider>
  );
}

init();
