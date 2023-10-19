import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './components/pages/Navigation';
import {ProvideAuth} from './providers/ProvideAuth';
import {ProvideTodo} from './providers/ProvideTodo';
import {store} from './app/store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ProvideAuth>
        <ProvideTodo>
          <Navigation />
        </ProvideTodo>
      </ProvideAuth>
    </Provider>
  );
}

export default App;
