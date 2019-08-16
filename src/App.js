import { Provider } from 'react-redux';
import React from 'react';
import BaseStyles from './utils/base-styles';
import storeInit from './store';
import theme from './utils/theme';
import Router from './router';

const store = storeInit();
function App() {
  return (
    <div>
      <BaseStyles theme={theme} />
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}
export default App;
