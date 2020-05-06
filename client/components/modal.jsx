/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

function Modal(props) {
  const { shown, children } = props;

  if (!shown) {
    return null;
  }

  return (
    <div className="modal">
      {children}
    </div>
  );
}

export default Modal;
