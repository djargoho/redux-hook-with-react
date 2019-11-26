import React from "react";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store";
import { Provider } from "react-redux";
import CounterContainer from "./CounterContainer";
import RenderTestComponent from "./RenderTestComponent";
const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
      <RenderTestComponent />
    </Provider>
  );
}

export default App;
