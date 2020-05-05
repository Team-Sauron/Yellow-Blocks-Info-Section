/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

function Counter(props) {
  const [count, updateCount] = useState(1);
  const { stock } = props;

  return (
    <div>
      {count <= 1
        ? (
          <div className="counterButtonDiv">
            <div className="greyed counterButton">-</div>
            <div className="counterButton">{count}</div>
            <div onClick={() => updateCount(count + 1)} className="counterButton" type="button">+</div>
          </div>
        )
        : (
          <div>
            {count > 2
              ? (
                <div className="counterButtonDiv">
                  <div onClick={() => updateCount(count - 1)} className="counterButton">-</div>
                  <div className="counterButton">{count}</div>
                  <div className="greyed counterButton" type="button">+</div>
                </div>
              )
              :
              (
                <div className="counterButtonDiv">
                  <div onClick={() => updateCount(count - 1)} className="counterButton">-</div>
                  <div className="counterButton">{count}</div>
                  <div onClick={() => updateCount(count + 1)} className="counterButton" type="button">+</div>
                </div>
              )}
          </div>
        )}
    </div>
  );
}

export default Counter;
