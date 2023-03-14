import { ThemeProvider } from "@mui/material/styles";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { Layout } from "@/components";
import { persistor, store } from "@/store";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const NotFound = lazy(() => import("./pages/NotFound"));

import theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={null}>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<Product />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </Suspense>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
