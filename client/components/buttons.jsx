import React, { useState } from 'react';
import styles from '../styles.css';

function Buttons() {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      {selected === 0
        ? (
          <div className={`${styles.twocolumnsfour}`.concat(` ${styles.selectedButtonDiv}`)}>
            <button className={`${styles.selectedButton}`.concat(` ${styles.buybuttons}`).concat(` ${styles.buttonsInSelect}`)} type="button">Buy Now</button>
            <button onClick={() => setSelected(Math.abs(selected - 1))} className={`${styles.buybuttons}`.concat(` ${styles.buttonsInSelect}`)} type="button">Check Store Stock</button>
          </div>
        )
        : (
          <div className={`${styles.twocolumnsfour}`.concat(` ${styles.selectedButtonDiv}`)}>
            <button onClick={() => setSelected(Math.abs(selected - 1))} className={`${styles.buybuttons}`.concat(` ${styles.buttonsInSelect}`)} type="button">Buy Now</button>
            <button className={`${styles.selectedButton}`.concat(` ${styles.buybuttons}`).concat(` ${styles.buttonsInSelect}`)} type="button">Check Store Stock</button>
          </div>
        )}
    </div>
  );
}

export default Buttons;
