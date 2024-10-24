import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';    // Import the Provider
import store from './app/store';       // Import the Redux store
import App from './App';                   // Your main App component
import { BrowserRouter as Router } from 'react-router-dom';  // For routing
import { createRoot } from 'react-dom/client'

import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>                 {/* Wrap App in Provider */}
    <Router>                               {/* Wrap App in Router for navigation */}
      <App />
    </Router>
  </Provider>,
)


