/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Stars from './stars';
import Wishlist from './wishlist';
import Buttons from './buttons';
import Counter from './counter';
import Modal from './modal';
import styles from '../styles.css';

const url = require('./ip');

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
    if (!(event.target.className === styles.i)
    && !(event.target.className === styles.modal)
    && !(event.target.className === styles.modalTitle)
    && !(event.target.className === styles.modaltexttwo)
    && !(event.target.className === styles.modalBtn)
    && !(event.target.className === styles.modalClose)) {
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
      <div className={`${styles.container}`} onClick={this.closeModals.bind(this)} onKeyPress={() => this.closeModals.bind(this)}>
        <div className={styles.legobarthing}>
          <div />
          <img src={`${url}/images/logo.png`} alt="logo" />
          <div />
          <div className={`${styles.searchDiv}`.concat(` ${styles.texttwo}}`)}>
            <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
              <input className={styles.searchInput} type="text" placeholder="  Search..." />
            </form>
          </div>
          <div />
        </div>
        <div className={styles.info}>
          <h3 className={styles.brand}>{ product.Brand }</h3>
          <h4 className={styles.title}>{ product.Name }</h4>
          <div className={styles.threecolumnstwo}>
            <Stars product={product} />
            <p className={styles.text}>
              { product.Reviews }
              {' '}
              Reviews
            </p>
            <p className={styles.text}>
              {' '}
              <a className={`${styles.text}`.concat(` ${styles.blue}`)} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Submit Review</a>
            </p>
          </div>
          <div>
            <p className={`${styles.price}`}>
              $
              {product.Price}
              .99
            </p>
            <Buttons />
            {product.Stock > 0
              ? <p className={`${styles.green}`.concat(` ${styles.text}`)}>Available Now</p>
              : <p className={`${styles.red}`.concat(` ${styles.text}`)}>Out Of Stock</p>}
            <div className={`${styles.text}`.concat(` ${styles.twocolumns}`).concat(` ${styles.counterArea}`)}>
              <Counter stock={product.Stock} />
              <p> </p>
              <div className={`${styles.limit}`}>
                <p className={`${styles.limitSpace}`}>Limit 3</p>
                <Modal shown={limitShown}>
                  <div className={`${styles.modalClose}`}>
                    <button onClick={() => this.setLimitShown()} type="button" className={`${styles.modalBtn}`.concat` ${styles.texttwo}`}>X</button>
                  </div>
                  <h4 className={`${styles.modalTitle}`}>
                    Limit
                  </h4>
                  <p className={`${styles.modaltexttwo}`}>
                    We restrict the limit a household can buy
                    in order to be fair to all of our fans.
                    If you’ve already reached that limit through previous orders,
                    your order may be cancelled.
                  </p>
                </Modal>
                <img className={`${styles.i}`} onClick={() => this.setLimitShown()} onKeyPress={() => this.setLimitShown()} src={`${url}/images/i.png`} alt="info" />
              </div>
            </div>
            <div>
              <button className={`${styles.bagbutton}`} type="button">Add To Bag</button>
            </div>
            <div className={`${styles.twocolumnsthree}`.concat(` ${styles.selectedButtonDiv}`).concat(` ${styles.spaceForWishList}`)}>
              <Wishlist />
              <p className={`${styles.textincol3}`.concat(` ${styles.text}`)}>
                Add to Wishlist
              </p>
            </div>
          </div>
          <div className={`${styles.text}`.concat(` ${styles.rmPadding}`).concat(` ${styles.rmMargin}`)}>
            <p>Shop more like this:</p>
            <p>
              {' '}
              <a className={`${styles.blue}`} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{product.Related}</a>
            </p>
          </div>
        </div>
        <div> </div>
        <div className={`${styles.stats}`}>
          <div> </div>
          <div className={`${styles.stat}`}>
            <img src={`${url}/images/cake.png`} alt="cake" />
            <p className={`${styles.statText}`}>
              {product.Ages}
            </p>
            <p className={`${styles.texttwo}`}>
              Ages
            </p>
          </div>
          <div className={`${styles.stat}`}>
            <img src={`${url}/images/lego.png`} alt="peices" />
            <p className={`${styles.statText}`}>
              {product.Pieces}
            </p>
            <p className={`${styles.texttwo}`}>
              Pieces
            </p>
          </div>
          <div className={`${styles.stat}`}>
            <Modal shown={vipShown}>
              <div className={`${styles.modalClose}`}>
                <button onClick={() => this.setVipShown()} type="button" className={`${styles.modalBtn}`.concat(`${styles.texttwo}`)}>X</button>
              </div>
              <h4 className={`${styles.modalTitle}`}>
                Vip Points
              </h4>
              <p className={`${styles.modaltexttwo}`}>
                The VIP Points value shown is an estimate.
                The actual points will be calculated when you check out.
              </p>
            </Modal>
            <img src={`${url}/images/crown.png`} alt="points" />
            <div className={`${styles.limitTwo}`}>
              <p className={`${styles.statText}`.concat(` ${styles.limitSpace}`)}>
                {product.VIP_Points}
              </p>
              <img className={`${styles.i}`} onClick={() => this.setVipShown()} onKeyPress={() => this.setVipShown()} src={`${url}/images/i.png`} alt="info" />
            </div>
            <p className={`${styles.texttwo}`}>VIP Points</p>
          </div>
          <div className={`${styles.statTwo}`}>
            <img src={`${url}/images/hashtag.png`} alt="product ID" />
            <p className={`${styles.statText}`}>
              {product.ID}
            </p>
            <p className={`${styles.texttwo}`}>
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
