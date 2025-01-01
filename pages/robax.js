import React, { useState } from "react";
import { Helmet } from "react-helmet";

function RobuxPage() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="robux-container">
      <Helmet>
        <meta property="og:title" content="robax shops inc ltd co" />
        <meta
          property="og:description"
          content="piss role + vencord limited offer DO NOT MISS!!!"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/3BYwhwz/Screenshot-2025-01-01-161531.png"
        />
        <meta property="og:url" content="https://pg-inc-api.vercel.app/robax" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1>Buy Robax!!1!!</h1>
      <button onClick={handleButtonClick}>Buy Robax!!1!!</button>

      {showModal && (
        <div className="simplemodal-container">
          <div className="simplemodal-wrap">
            <div className="modal-confirmation">
              <div className="modal-dialog">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    onClick={closeModal}
                  >
                    <i className="fa fa-times" style={{ color: "black" }}></i>
                  </button>
                  <h5 className="modal-title">Insufficient Tokens lmao</h5>
                </div>
                <div className="modal-body">
                  <div className="modal-top-body">
                    <div className="modal-message">
                      <div className="item-card-container item-preview">
                        <div className="item-card-thumb">
                          <img
                            alt="item preview"
                            src="https://i.ibb.co/3BYwhwz/Screenshot-2025-01-01-161531.png"
                          />
                        </div>
                        <div className="item-info text-name">
                          <div className="text-overflow item-card-name">
                            piss role (dwc) + vencord
                          </div>
                          <div className="text-robux item-card-price">
                            <span className="text-robux">10</span>
                          </div>
                        </div>
                      </div>
                      <div className="modal-message-block text-center border-top">
                        you need to give piss for it or buy it with{" "}
                        <span className="text-robux">10</span> tokens lmao (you
                        won’t be charged but you won’t get the item too)
                      </div>
                    </div>
                    <div className="modal-btns">
                      <a href="" id="confirm-btn" className="btn-primary-md">
                        Buy Robux and Item
                      </a>
                      <a href="" id="decline-btn" className="btn-control-md">
                        Cancel
                      </a>
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
          font-family: "Comic Sans MS", sans-serif;
          margin: 50px auto;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        button {
          padding: 12px 25px;
          font-size: 1.1rem;
          background: linear-gradient(
            90deg,
            rgba(33, 150, 243, 1) 0%,
            rgba(3, 169, 244, 1) 100%
          );
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        button:hover {
          background: linear-gradient(
            90deg,
            rgba(3, 169, 244, 1) 0%,
            rgba(33, 150, 243, 1) 100%
          );
          transform: scale(1.05);
        }

        .simplemodal-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .simplemodal-wrap {
          background: white;
          border-radius: 10px;
          width: 80%;
          max-width: 600px;
          padding: 20px;
        }

        .modal-confirmation {
          background: white;
          border-radius: 10px;
        }

        .modal-dialog {
          background: white;
          border-radius: 10px;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header .close {
          background: none;
          border: none;
          color: black;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .modal-body {
          margin-top: 20px;
        }

        .modal-btns {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
        }

        .modal-btns a {
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
        }

        .btn-primary-md {
          background-color: #4caf50;
          color: white;
        }

        .btn-control-md {
          background-color: #f44336;
          color: white;
        }

        .loading {
          margin-top: 20px;
          text-align: center;
        }

        .loading-default {
          width: 40px;
          height: 40px;
        }
      `}</style>
    </div>
  );
}

export default RobuxPage;
