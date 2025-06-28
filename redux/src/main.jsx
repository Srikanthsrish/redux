
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';

import App from './App';
import store from './Redux/./Store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
// src/index.js



