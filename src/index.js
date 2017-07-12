import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./routes";
import configureStore from "./store/index";

const store = configureStore();

function build(Component) {
  render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
}

build(AppRouter);

if (module.hot) {
  module.hot.accept("./routes", () => {
    const AppRouter = require("./routes").default;
    build(AppRouter);
  });
}
