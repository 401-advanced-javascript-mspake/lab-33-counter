import React from 'react';

import { CountContext } from './counter-context';

class Counter extends React.Component {
static contextType = CountContext;

render() {
  return (
    <>
      <h4>{this.context.count}</h4>
    </>
  );
}
}

export default Counter;
