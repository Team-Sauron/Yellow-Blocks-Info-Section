/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

function Counter() {
  const [count, updateCount] = useState(1);

  return (
    <div>
      {count <= 1
        ? (
          <div className="counterButtonDiv">
            <div className="greyed counterButton">-</div>
            <div className="counterButtonNumber">{count}</div>
            <div onClick={() => updateCount(count + 1)} onKeyPress={() => updateCount(count + 1)} className="counterButton" type="button">+</div>
          </div>
        )
        : (
          <div>
            {count > 2
              ? (
                <div className="counterButtonDiv">
                  <div onClick={() => updateCount(count - 1)} onKeyPress={() => updateCount(count - 1)} className="counterButton">-</div>
                  <div className="counterButtonNumber">{count}</div>
                  <div className="greyed counterButton" type="button">+</div>
                </div>
              )
              : (
                <div className="counterButtonDiv">
                  <div onClick={() => updateCount(count - 1)} onKeyPress={() => updateCount(count - 1)} className="counterButton">-</div>
                  <div className="counterButtonNumber">{count}</div>
                  <div onClick={() => updateCount(count + 1)} onKeyPress={() => updateCount(count + 1)} className="counterButton" type="button">+</div>
                </div>
              )}
          </div>
        )}
    </div>
  );
}

export default Counter;
