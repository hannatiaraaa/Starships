import { createBrowserHistory } from "history";

let BASE_PATH = process.env.PUBLIC_URL;

if (window.BASE_PATH) {
  BASE_PATH = window.BASE_PATH;
}

const history = createBrowserHistory({ basename: BASE_PATH });

export default history;
