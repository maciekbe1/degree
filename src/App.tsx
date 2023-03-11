import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { Layout } from "@/components";
import { store } from "@/store";

import router from "./router";
import theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
