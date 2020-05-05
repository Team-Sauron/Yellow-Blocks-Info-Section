import React from 'react';
// eslint-disable-next-line import/extensions
import Product from './product.jsx';

class Info extends React.Component {
  // eslint-disable-next-line no-useless-constructor
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
