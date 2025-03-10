import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./index.css";

import axios from "axios";
import App from "./App.js";
import { BrowserRouter } from "react-router";
import { store } from "./store.js";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

axios.defaults.baseURL = "http://localhost:5000";

const queryClient = new QueryClient();

const persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
