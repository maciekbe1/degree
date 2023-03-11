import { createBrowserRouter } from "react-router-dom";

import { Cart, Home } from "./pages";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
