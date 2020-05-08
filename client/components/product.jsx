/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Stars from './stars';
import Wishlist from './wishlist';
import Buttons from './buttons';
import Counter from './counter';
import Modal from './modal';

class Product extends React.Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      product, limitShown: false, vipShown: false,
    };
  }

  setLimitShown() {
    const { product, limitShown, vipShown } = this.state;
    this.setState({
      limitShown: !limitShown, product, vipShown,
    });
  }

  setVipShown() {
    const { product, limitShown, vipShown } = this.state;
    this.setState({
      vipShown: !vipShown, product, limitShown,
    });
  }

  closeModals(event) {
    const { product } = this.state;
    if (!(event.target.className === 'i') && !(event.target.className === 'modal') && !(event.target.className === 'modalTitle') && !(event.target.className === 'modaltexttwo') && !(event.target.className === 'modalBtn') && !(event.target.className === 'modalClose')) {
      this.setState({
        vipShown: false, product, limitShown: false,
      });
    }
  }

  render() {
    const { product } = this.props;
    const { limitShown } = this.state;
    const { vipShown } = this.state;
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div onClick={this.closeModals.bind(this)} onKeyPress={() => this.closeModals.bind(this)} className="container">
        <div></div>
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
              <a className="text blue" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Submit Review</a>
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
            <div className="text twocolumns counterArea">
              <Counter stock={product.Stock} />
              <p> </p>
              <div className="limit">
                <p className="limitSpace">Limit 3</p>
                <img className="i" onClick={() => this.setLimitShown()} onKeyPress={() => this.setLimitShown()} src="http://localhost:3002/images/i.png" alt="info" />
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
              <a className="blue" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{product.Related}</a>
            </p>
          </div>
        </div>
        <div>
          <Modal shown={limitShown}>
            <div className="modalClose">
              <button onClick={() => this.setLimitShown()} type="button" className="modalBtn texttwo">X</button>
            </div>
            <h4 className="modalTitle">
              Limit
            </h4>
            <p className="modaltexttwo">
              We restrict the limit a household can buy in order to be fair to all of our fans.
              If you’ve already reached that limit through previous orders,
              your order may be cancelled.
            </p>
          </Modal>
          <Modal shown={vipShown}>
            <div className="modalClose">
              <button onClick={() => this.setVipShown()} type="button" className="modalBtn texttwo">X</button>
            </div>
            <h4 className="modalTitle">
              Vip Points
            </h4>
            <p className="modaltexttwo">
              The VIP Points value shown is an estimate.
              The actual points will be calculated when you check out.
            </p>
          </Modal>
        </div>
        <div className="stats">
          <div> </div>
          <div className="stat">
            <img src="http://localhost:3002/images/cake.png" alt="cake" />
            <p className="statText">
              {product.Ages}
            </p>
            <p className="texttwo">
              Ages
            </p>
          </div>
          <div className="stat">
            <img src="http://localhost:3002/images/lego.png" alt="peices" />
            <p className="statText">
              {product.Pieces}
            </p>
            <p className="texttwo">
              Pieces
            </p>
          </div>
          <div className="stat">
            <img src="http://localhost:3002/images/crown.png" alt="points" />
            <div className="limitTwo">
              <p className="statText limitSpace">
                {product.VIP_Points}
              </p>
              <img className="i" onClick={() => this.setVipShown()} onKeyPress={() => this.setVipShown()} src="http://localhost:3002/images/i.png" alt="info" />
            </div>
            <p className="texttwo">VIP Points</p>
          </div>
          <div className="statTwo">
            <img src="http://localhost:3002/images/hashtag.png" alt="product ID" />
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
