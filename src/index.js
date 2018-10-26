import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { HashRouter, BrowserRouter } from 'react-router-dom';

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const Router = ({ children }) => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <BrowserRouter>
        {children}
      </BrowserRouter>
    )
  }
  return (
    <HashRouter>
      {children}
    </HashRouter>
  )
};

Router.propTypes = {
  children: PropTypes.any,
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
