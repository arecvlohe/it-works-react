import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-most";
import rootEpic from "./epics";
import rootReducer from "./reducers";

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const replaceRootEpic = () => {
  import("./epics").then(({ default: nextRootEpic }) => {
    epicMiddleware.replaceEpic(nextRootEpic);
  });
};

if (module.hot) {
  module.hot.accept("./epics", replaceRootEpic);
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  return store;
}
