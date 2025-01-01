import React, { useState } from "react";

function RobuxPage() {
  const [showModal, setShowModal] = useState(false);
  const [buttonState, setButtonState] = useState("default");

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setButtonState("default");
  };

  const handleScamAnimation = () => {
    setButtonState("piss");
  };

  return (
    <div className="robux-container">
      <h1>Buy Robax!!1!!</h1>
      <button onClick={handleButtonClick}>Buy Robax!!1!!</button>

      {showModal && (
        <div className="simplemodal-container">
          <div className="simplemodal-wrap">
            <div className="modal-confirmation">
              <div className="modal-dialog">
                <div className="modal-header">
                  <button type="button" className="close" onClick={closeModal}>
                    <span aria-hidden="true">×</span>
                  </button>
                  <h5 className="modal-title">Insufficient Robux</h5>
                </div>
                <div className="modal-body">
                  <div className="modal-top-body">
                    <div className="modal-message">
                      <div className="modal-message-block text-center border-top">
                        you need to give piss for it, or buy it with 10 tokens
                        lmao (you won't be charged but you won't get the item
                        too).
                      </div>
                    </div>
                    <div className="modal-btns">
                      {buttonState === "default" ? (
                        <button
                          id="confirm-btn"
                          className="btn-primary-md"
                          onClick={handleScamAnimation}
                        >
                          Get Tokens + Item
                        </button>
                      ) : (
                        <div className="scam-animation">Piss</div>
                      )}
                      <button
                        id="decline-btn"
                        className="btn-control-md"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="loading modal-processing">
                      <img
                        className="loading-default"
                        src="https://images.rbxcdn.com/4bed93c91f909002b1f17f05c0ce13d1.gif"
                        alt="Processing..."
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer text-footer" style={{ display: "none" }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .robux-container {
          text-align: center;
          margin: 50px auto;
        }

        .modal-btns {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }

        .btn-primary-md {
          padding: 10px 20px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .btn-primary-md:hover {
          transform: scale(1.05);
        }

        .btn-control-md {
          padding: 10px 20px;
          background-color: #f44336;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .btn-control-md:hover {
          transform: scale(1.05);
        }

        .scam-animation {
          color: yellow;
          font-size: 1.5rem;
          font-weight: bold;
          animation: shake 0.5s infinite alternate;
        }

        @keyframes shake {
          0% {
            transform: translateX(-5px);
          }
          100% {
            transform: translateX(5px);
          }
        }
      `}</style>
    </div>
  );
}

export default RobuxPage;
