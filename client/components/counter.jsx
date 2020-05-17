/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import styles from '../styles.css';

function Counter() {
  const [count, updateCount] = useState(1);

  return (
    <div>
      {count <= 1
        ? (
          <div className={styles.counterButtonDiv}>
            <div className={`${styles.greyed}`.concat(` ${styles.counterButton}`)}>-</div>
            <div className={styles.counterButtonNumber}>{count}</div>
            <div onClick={() => updateCount(count + 1)} onKeyPress={() => updateCount(count + 1)} className={styles.counterButton} type="button">+</div>
          </div>
        )
        : (
          <div>
            {count > 2
              ? (
                <div className={styles.counterButtonDiv}>
                  <div
                    onClick={() => updateCount(count - 1)}
                    onKeyPress={() => updateCount(count - 1)}
                    className={styles.counterButton}
                  >
                    -
                  </div>
                  <div className={styles.counterButtonNumber}>{count}</div>
                  <div className={`${styles.greyed}`.concat(` ${styles.counterButton}`)} type="button">+</div>
                </div>
              )
              : (
                <div className={styles.counterButtonDiv}>
                  <div
                    onClick={() => updateCount(count - 1)}
                    onKeyPress={() => updateCount(count - 1)}
                    className={styles.counterButton}
                  >
                    -
                  </div>
                  <div className={styles.counterButtonNumber}>{count}</div>
                  <div onClick={() => updateCount(count + 1)} onKeyPress={() => updateCount(count + 1)} className={styles.counterButton} type="button">+</div>
                </div>
              )}
          </div>
        )}
    </div>
  );
}

export default Counter;
