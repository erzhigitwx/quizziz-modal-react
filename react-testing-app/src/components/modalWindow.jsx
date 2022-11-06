import React, { useState } from "react";

const Modal = function () {
  const [state, setState] = useState(false);

  return (
    <div className="App">
      <button
        className={state ? "close-modal-btn" : "open-modal-btn"}
        onClick={() => setState(true)}
      >
        ✨ Открыть окно
      </button>
      {state && (
        <div className="overlay">
          <div className="modal">
            <svg
              height="30"
              viewBox="0 0 200 200"
              width="30"
              onClick={() => setState(false)}
              className="svg-close"
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img
              src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
              className="giph-modal"
              alt="giph"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
