/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

const url = require('./ip');

function Wishlist() {
  const [added, setAdded] = useState(false);
  return (
    <div>
      {added
        ? <img onClick={() => setAdded(!added)} onKeyPress={() => setAdded(!added)} src={`${url}/images/addtowishlist.png`} alt="un-add to wishlist button" />
        : <img onClick={() => setAdded(!added)} onKeyPress={() => setAdded(!added)} src={`${url}/images/addtowishlist1.png`} alt="add to wishlist button" />}
    </div>
  );
}

export default Wishlist;
