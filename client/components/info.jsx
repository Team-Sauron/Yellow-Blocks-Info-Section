import React from 'react';
import Product from './product';

class Info extends React.Component {
  constructor(props) {
    super(props);
    const { entry } = this.props;
    this.state = {
      entry,
    };
  }

  render() {
    const { entry } = this.state;
    return (
      <Product product={entry} />
    );
  }
}

export default Info;
