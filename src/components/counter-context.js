import React from 'react';

export const CountContext = React.createContext();

class CountContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
    };
  }

  increment = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  }

  decrement = () => {
    const count = this.state.count - 1;
    this.setState({ count });
  }

  render() {
    return (
      <CountContext.Provider value={this.state}>
        { this.props.children }
      </CountContext.Provider>
    );
  }
}

export default CountContextProvider;
