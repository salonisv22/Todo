import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './components/pages/Navigation';
import {ProvideAuth} from './providers/ProvideAuth';
import {ProvideTodo} from './providers/ProvideTodo';

function App(): JSX.Element {
  return (
    <ProvideAuth>
      <ProvideTodo>
        <Navigation />
      </ProvideTodo>
    </ProvideAuth>
  );
}

export default App;
