import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';

function App(): JSX.Element {
  return (
    <StoreProvider store={store}>
      <MainNavigator />
    </StoreProvider>
  );
}

export default App;
