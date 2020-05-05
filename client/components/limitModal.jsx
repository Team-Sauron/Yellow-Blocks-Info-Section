/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

function LimitModal(props) {
  const { shown } = props;

  return (
    <div>
      {shown
        ? <p>hey</p>
        : <p> </p>}
    </div>
  );
}

export default LimitModal;
