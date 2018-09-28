import React, { Component } from "react";
import { Provider } from "react-redux";
import { Text } from "react-native";
import { createStore } from "redux";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

export default class App extends Component {
  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
