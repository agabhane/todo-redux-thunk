import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Todo from './todo/Todo';
import { Provider } from 'react-redux';
import { store } from './store';

interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
