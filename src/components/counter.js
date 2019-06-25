import React from 'react';

import { CountContext } from './counter-context';

class Counter extends React.Component {
  render() {
    return (
    <CountContext.Consumer>
      {
        (context) => {
          return (
            <h4>{context.count}</h4>
          );
        }
  }
  </CountContext.Consumer>
    );
  }
}

export default Counter;
