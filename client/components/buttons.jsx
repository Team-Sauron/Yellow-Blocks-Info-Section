import React, { useState } from 'react';

function Buttons() {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      {selected === 0
        ? (
          <div className="twocolumnsfour selectedButtonDiv">
            <button className="selectedButton buybuttons buttonsInSelect" type="button">Buy Now</button>
            <button onClick={() => setSelected(Math.abs(selected - 1))} className="buybuttons buttonsInSelect" type="button">Check Store Stock</button>
          </div>
        )
        : (
          <div className="twocolumnsfour selectedButtonDiv">
            <button onClick={() => setSelected(Math.abs(selected - 1))} className="buybuttons buttonsInSelect" type="button">Buy Now</button>
            <button className="selectedButton buybuttons buttonsInSelect" type="button">Check Store Stock</button>
          </div>
        )}
    </div>
  );
}

export default Buttons;
