import React, { useState } from 'react';

function Wishlist() {
  const [added, setAdded] = useState(false);

  return (
    <div>
      {added
        ? <img onClick={() => setAdded(!added)} src="./../images/addtowishlist.png" alt="un-add to wishlist button" />
        : <img onClick={() => setAdded(!added)} src="./../images/addtowishlist1.png" alt="add to wishlist button" />}
    </div>
  );
}

export default Wishlist;
