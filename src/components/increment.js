import React from 'react';

import { CountContext } from './counter-context';

class Increment extends React.Component {
  static contextType = CountContext;

  render() {
    return (
      <button style={{
        textAlign: 'center', margin: '10px auto', width: '100px', backgroundColor: 'green', color: 'white', 
      }} onClick={this.context.increment}>+</button>
    );
  }
}

export default Increment;
