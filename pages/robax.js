import React, { useState, useEffect } from 'react';

const PcrackerPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [robuxAmount, setRobuxAmount] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setRobuxAmount((prev) => prev + Math.floor(Math.random() * 10));
      }, 500);
      return () => clearInterval(timer);
    }
  }, [isLoading]);

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FREE ROBUX</title>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet" />
        <style>
          {`
            body {
              font-family: 'Source Sans Pro', sans-serif;
              background-color: #f4f4f9;
              color: #333;
              margin: 0;
              padding: 0;
              line-height: 1.6;
            }

            header {
              padding: 40px;
              text-align: center;
              background-color: #1c1c1c;
              color: #fff;
              border-bottom: 2px solid #222;
            }

            h1 {
              font-size: 2.8rem;
              margin: 0;
              font-weight: 700;
            }

            .subtitle {
              margin-top: 15px;
              font-size: 1.2rem;
              color: #bbb;
            }

            .button {
              background-color: #4CAF50;
              color: #fff;
              padding: 15px 30px;
              font-size: 1.25rem;
              font-weight: 600;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              margin-top: 20px;
              transition: background-color 0.3s;
            }

            .button:hover {
              background-color: #45a049;
            }

            .progress-bar-container {
              background-color: #ddd;
              border-radius: 5px;
              width: 80%;
              max-width: 600px;
              margin: 20px auto;
              padding: 5px;
              box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
            }

            .progress-bar {
              height: 20px;
              width: 0%;
              background-color: #4CAF50;
              border-radius: 5px;
              transition: width 2s ease;
              animation: fillBar 3s infinite;
            }

            @keyframes fillBar {
              0% { width: 0%; }
              25% { width: 40%; }
              50% { width: 70%; }
              75% { width: 90%; }
              100% { width: 100%; }
            }

            .robux-amount {
              font-size: 1.5rem;
              font-weight: bold;
              color: #333;
              margin-top: 15px;
            }

            .robux-amount span {
              color: #00b300;
            }

            .progress-bar.piss {
              background-color: #ffcc00;
              animation: fillBar 3s infinite, changeToPiss 1s infinite;
            }

            @keyframes changeToPiss {
              0% {
                background-color: #4CAF50;
                transform: scaleX(1);
              }
              50% {
                background-color: #ffcc00;
                transform: scaleX(1.2);
              }
              100% {
                background-color: #ffcc00;
                transform: scaleX(1);
              }
            }
          `}
        </style>
      </head>

      <body>
        <header>
          <h1>FREE ROBUX</h1>
          <p className="subtitle">Just click below and start claiming your FREE Robux!</p>
        </header>

        <main>
          <p>We're processing your free Robux request...</p>
          <div className="progress-bar-container">
            <div className={`progress-bar ${isLoading ? 'piss' : ''}`}></div>
          </div>

          {isLoading && (
            <>
              <p className="robux-amount">You're getting <span>{robuxAmount}</span> Robux...</p>
              <button className="button" onClick={() => setIsLoading(false)}>Stop Loading</button>
            </>
          )}

          {!isLoading && (
            <>
              <button className="button" onClick={() => setIsLoading(true)}>Get FREE Robux!</button>
            </>
          )}
        </main>
      </body>
    </>
  );
};

export default PcrackerPage;
