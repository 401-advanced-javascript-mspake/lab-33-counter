import React from 'react';

import { CountContext } from './counter-context';

class Increment extends React.Component {
  static contextType = CountContext;

  render() {
    return (
      <a href="#" onClick={this.context.increment}>+</a>
    );
  }
}

export default Increment;
