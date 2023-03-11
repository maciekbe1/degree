import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";

import { Layout } from "@/components";

import router from "./router";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
