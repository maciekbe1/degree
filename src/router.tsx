import { createBrowserRouter } from "react-router-dom";

import { Home, Product } from "./pages";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);
