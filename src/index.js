import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import CountContextProvider from './components/counter-context';


function Wrapper() {
  return (
  <CountContextProvider>
        <App />
   </CountContextProvider>
  );
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
