import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./utils/ThemeContext";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
