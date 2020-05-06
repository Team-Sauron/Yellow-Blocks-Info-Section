/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line import/extensions
import Stars from './stars.jsx';
// eslint-disable-next-line import/extensions
import Wishlist from './wishlist.jsx';
// eslint-disable-next-line import/extensions
import Buttons from './buttons.jsx';
// eslint-disable-next-line import/extensions
import Counter from './counter.jsx';
// eslint-disable-next-line import/extensions
import LimitModal from './limitModal.jsx';

class Product extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    const { product } = this.props;
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      product, shown: false,
    };
  }

  setShown() {
    const { product, shown } = this.state;
    this.setState({
      shown: !shown, product,
    });
  }

  render() {
    const { product } = this.props;
    const { shown } = this.state;
    return (
      <div className="container">
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
              <a className="text blue" href="#">Submit Review</a>
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
            <LimitModal shown={shown} />
            <div className="text twocolumns counterArea">
              <Counter stock={product.Stock} />
              <p> </p>
              <div className="limit">
                <p className="limitSpace">Limit 3</p>
                <img onClick={() => this.setShown()} src="./../images/i.png"/>
              </div>
            </div>
            <div>
              <button className="bagbutton" type="button">Add To Bag</button>
            </div>
            <div className="twocolumnsthree selectedButtonDiv spaceForWishList">
              <Wishlist />
              <p className="textincol3 text">
                Add to Wishlist
              </p>
            </div>
          </div>
          <div className="text rmPadding rmMargin">
            <p>Shop more like this:</p>
            <p>
              {' '}
              <a className="blue" href="#">{product.Related}</a>
            </p>
          </div>
        </div>
        <div className="stats">
          <div></div>
          <div className="stat">
            <img src="./../images/cake.png"/>
            <p className="statText">
              {product.Ages}
            </p>
            <p className="texttwo">
              Ages
            </p>
          </div>
          <div className="stat">
            <img src="./../images/lego.png"/>
            <p className="statText">
              {product.Pieces}
            </p>
            <p className="texttwo">
              Pieces
            </p>
          </div>
          <div className="stat">
            <img src="./../images/crown.png"/>
            <div className="limitTwo">
              <p className="statText limitSpace">
                {product.VIP_Points}
              </p>
              <img onClick={() => this.setShown()} src="./../images/i.png"/>
            </div>
            <p className="texttwo">VIP Points</p>
          </div>
          <div className="statTwo">
            <img src="./../images/hashtag.png"/>
            <p className="statText">
              {product.ID}
            </p>
            <p className="texttwo">
              Item
            </p>
          </div>
          <div> </div>
        </div>
      </div>
    );
  }
}

export default Product;
