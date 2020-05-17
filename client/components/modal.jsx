import React from 'react';
import styles from '../styles.css';

function Modal(props) {
  const { shown, children } = props;

  if (!shown) {
    return null;
  }

  return (
    <div className={styles.infomodal}>
      {children}
    </div>
  );
}

export default Modal;
