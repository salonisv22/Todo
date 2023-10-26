import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './components/pages/Navigation';
import {ProvideAuth} from './providers/ProvideAuth';
import {store} from './app/store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ProvideAuth>
        <Navigation />
      </ProvideAuth>
    </Provider>
  );
}

export default App;
