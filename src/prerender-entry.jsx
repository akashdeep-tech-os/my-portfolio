import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App";

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StaticRouter>
  );
}
