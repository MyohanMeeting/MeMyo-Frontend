import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import AppRoutes from './router/AppRoutes';
import { store } from './redux/configureStore';
=======
import store from '@redux/store'
import router from '@/router';


>>>>>>> develop

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
