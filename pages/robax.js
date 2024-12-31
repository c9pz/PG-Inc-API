import React from 'react';

const PcrackerPage = () => {
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
              background-color: #f9f9f9;
              color: #333;
              margin: 0;
              padding: 0;
              line-height: 1.6;
            }

            header {
              padding: 60px 20px;
              text-align: center;
              background-color: #1a1a1a;
              color: #fff;
              border-bottom: 2px solid #222;
            }

            h1 {
              font-size: 3rem;
              margin: 0;
              font-weight: 700;
            }

            .subtitle {
              margin-top: 15px;
              font-size: 1.3rem;
              color: #bbb;
            }

            .button {
              background-color: #4CAF50;
              color: #fff;
              padding: 20px 40px;
              font-size: 1.25rem;
              font-weight: 600;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              margin-top: 20px;
              transition: background-color 0.3s;
              width: 100%;
              max-width: 400px;
              margin-left: auto;
              margin-right: auto;
            }

            .button:hover {
              background-color: #45a049;
            }

            .card {
              background-color: #fff;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              padding: 30px;
              margin-top: 30px;
              max-width: 600px;
              margin-left: auto;
              margin-right: auto;
            }

            .card h2 {
              font-size: 1.8rem;
              font-weight: 700;
              color: #333;
              margin-bottom: 20px;
            }

            .robux-amount {
              font-size: 2rem;
              font-weight: 700;
              color: #2d7f2f;
              margin-bottom: 30px;
            }

            .robux-amount span {
              font-size: 2.5rem;
              color: #0073e6;
            }

            .card p {
              font-size: 1.1rem;
              color: #444;
              margin-bottom: 20px;
            }

            footer {
              text-align: center;
              padding: 20px;
              font-size: 1rem;
              color: #666;
              background-color: #f1f1f1;
              border-top: 2px solid #ddd;
            }

            footer a {
              text-decoration: none;
              color: #0073e6;
            }
          `}
        </style>
      </head>

      <body>
        <header>
          <h1>FREE ROBUX</h1>
          <p className="subtitle">Instant Robux delivered to your account. No surveys, no hassle!</p>
        </header>

        <main>
          <div className="card">
            <h2>Claim Your Robux</h2>
            <p>Start the process to get your free Robux in just a few clicks! Simply click below to begin.</p>
            <p className="robux-amount">
              You’re eligible for <span>1,000 Robux</span> right now!
            </p>
            <button className="button">Get Free Robux!</button>
            <p>It only takes a few seconds! Hurry, the offer won’t last long.</p>
          </div>

          <footer>
            <p>Disclaimer: This is not a scam! All transactions are 100% secure. <a href="#">Privacy Policy</a></p>
          </footer>
        </main>
      </body>
    </>
  );
};

export default PcrackerPage;
