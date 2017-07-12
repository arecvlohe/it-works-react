import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./routes";

function build(Component) {
  render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
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
