import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store';
import App from './components/App';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app-root'),
);
