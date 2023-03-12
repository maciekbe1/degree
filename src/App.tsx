import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { Layout } from "@/components";
import { persistor, store } from "@/store";

import router from "./router";
import theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
