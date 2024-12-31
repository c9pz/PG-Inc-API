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
        <title>FREE ROBAX!!!1!!</title>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet" />
        <style>
          {`
            body {
              font-family: 'Source Sans Pro', sans-serif;
              background-color: #fff;
              color: #222;
              margin: 0;
              padding: 0;
              line-height: 1.6;
            }

            header {
              padding: 20px;
              text-align: center;
              background-color: #f9f9f9;
              border-bottom: 1px solid #e6e6e6;
            }

            h1 {
              font-size: 2.5rem;
              font-weight: 600;
              margin: 0;
              color: #ff5c5c;
              text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
              animation: glowing 1.5s ease-in-out infinite alternate;
            }

            @keyframes glowing {
              0% {
                text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff5c5c;
              }
              100% {
                text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff5c5c;
              }
            }

            p {
              font-size: 1.25rem;
              color: #555;
              margin: 10px;
            }

            .button {
              background-color: #ff5c5c;
              color: #fff;
              padding: 10px 20px;
              border-radius: 5px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.25rem;
              margin: 20px 0;
              display: inline-block;
              transition: background-color 0.3s;
            }

            .button:hover {
              background-color: #e44a4a;
            }

            .progress-bar-container {
              background-color: #f2f2f2;
              border-radius: 10px;
              width: 80%;
              margin: 20px auto;
              padding: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            .progress-bar {
              height: 20px;
              width: 0%;
              background-color: #00ff00;
              border-radius: 10px;
              animation: fillBar 3s infinite, changeToPiss 1s infinite;
            }

            @keyframes fillBar {
              0% { width: 0%; }
              25% { width: 40%; }
              50% { width: 70%; }
              75% { width: 90%; }
              100% { width: 100%; }
            }

            @keyframes changeToPiss {
              0% {
                background-color: #00ff00;
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

            .robux-amount {
              font-size: 1.5rem;
              font-weight: bold;
              color: #ff5c5c;
              margin-top: 15px;
            }
          `}
        </style>
      </head>

      <body>
        <header>
          <h1>FREE ROBAX!!!1!!</h1>
          <p>congratulations! you've been selected to claim your free robux!!!</p>
        </header>

        <main>
          <p>we're unlocking your free robux right now... please wait a moment</p>
          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
          
          {isLoading && (
            <>
              <p className="robux-amount">you've earned {robuxAmount} robux so far...</p>
              <button className="button" onClick={() => setIsLoading(false)}>stop loading</button>
            </>
          )}
          
          {!isLoading && (
            <>
              <button className="button" onClick={() => setIsLoading(true)}>unlock more robux!!!1!!</button>
            </>
          )}
        </main>
      </body>
    </>
  );
};

export default PcrackerPage;
