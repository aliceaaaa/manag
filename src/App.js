import React, { Component } from "react";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import { createStore } from "redux";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyD9rceAP0snuCvT2xdr2LemoonJO1UImVo",
      authDomain: "manager-d51bd.firebaseapp.com",
      databaseURL: "https://manager-d51bd.firebaseio.com",
      projectId: "manager-d51bd",
      storageBucket: "manager-d51bd.appspot.com",
      messagingSenderId: "941821767117"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
