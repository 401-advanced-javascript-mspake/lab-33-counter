import React from 'react';
import Increment from './components/increment';
import Counter from './components/counter';
import Decrement from './components/decrement';
import './app.css';

class App extends React.Component {
  render() {
    return (
        <Counter />
    );
  }
}

export default App;
