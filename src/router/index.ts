import { createBrowserRouter } from "react-router-dom";
import paths from "./paths";

const router = createBrowserRouter(paths, {
  basename: import.meta.env.BASE_URL,
});

export default router;