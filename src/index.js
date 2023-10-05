import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { GlobalStyle } from 'components/GlobalStyles/GlobalStyles.styled';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
