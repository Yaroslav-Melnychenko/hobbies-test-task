import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import Hobbies from './pages/hobbies';

const App = () => (
  <Provider store={store}>
    <Hobbies />
  </Provider>
);

export default App;
