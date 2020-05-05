/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line import/extensions
import Stars from './stars.jsx';
// eslint-disable-next-line import/extensions
import Wishlist from './wishlist.jsx';
// eslint-disable-next-line import/extensions
import Buttons from './buttons.jsx';

class Product extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    const { product } = this.props;
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      product,
    };
  }

  render() {
    const { product } = this.props;
    return (
      <div className="container">
        <section> </section>
        <div className="info">
          <h3 className="brand">{ product.Brand }</h3>
          <h4 className="title">{ product.Name }</h4>
          <div className="threecolumnstwo">
            <Stars product={product} />
            <p className="text">
              { product.Reviews }
              {' '}
              Reviews
            </p>
            <p className="text">
              {' '}
              <a href="#">Submit Review</a>
            </p>
          </div>
          <div>
            <p className="price">
              $
              {product.Price}
              .99
            </p>
            <Buttons />
            {product.Stock > 0
              ? <p className="green text">Available Now</p>
              : <p className="red text">Out Of Stock</p>}
            <div className="text twocolumns">
              {/* <select></select> */}
              <p> </p>
              <p> </p>
              <div>
                <p>Limit 3</p>
                <p>i</p>
              </div>
            </div>
            <div>
              <button className="bagbutton" type="button">Add To Bag</button>
            </div>
            <div className="twocolumnsthree">
              <Wishlist />
              <p className="textincol3 text">
                Add to Wishlist
              </p>
            </div>
          </div>
          <p>Shop more like this:</p>
          <p>
            {' '}
            <a href="#">{product.Related}</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Product;
