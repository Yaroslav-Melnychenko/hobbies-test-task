import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import Hobies from './pages/hobies';

const App = () => (
  <Provider store={store}>
    <Hobies />
  </Provider>
);

export default App;
