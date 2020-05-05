import React from 'react';

class Half extends React.Component {
  constructor(props) {
    super(props);
    const { rating, pos } = this.props;
    this.state = {
      rating, pos,
    };
  }

  render() {
    const { rating, pos } = this.state;
    // console.log("rating and pos ", rating, pos);
    // if (rating > 0) {
    //   console.log('gold half');
    // } else {
    //   console.log('grey half');
    // }
    return (
      <div>
        {rating > 0
          ? (
            <div>
              {pos > 0
                ? <img className="halfStar" src="./images/leftGold.png" alt="average rating as stars" />
                : <img className="halfStar" src="./images/rightGold.png" alt="average rating as stars" />}
            </div>
          )
          : (
            <div>
              {pos > 0
                ? <img className="halfStar" src="./images/leftGrey.png" alt="average rating as stars" />
                : <img className="halfStar" src="./images/rightGrey.png" alt="average rating as stars" />}
            </div>
          )}
      </div>
    );
  }
};

export default Half;
