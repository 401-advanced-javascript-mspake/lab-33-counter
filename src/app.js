import React from 'react';
import Increment from './components/increment';
import Counter from './components/counter';
import Decrement from './components/decrement';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <div style={{ 
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center', 
        border: '1px solid grey',
        width: '25%',
        margin: 'auto', 
      }}>
        <Increment />
        <Counter />
        <Decrement />
      </div>
    );
  }
}

export default App;
