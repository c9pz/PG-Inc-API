import React, { useState } from 'react';

const PcrackerPage = () => {
  const [crackStatus, setCrackStatus] = useState('');
  const [isCracking, setIsCracking] = useState(false);

  const startCracking = () => {
    setIsCracking(true);
    setCrackStatus('cracking... almost there...');
    setTimeout(() => {
      setCrackStatus('successfully cracked! 🎉');
      setIsCracking(false);
    }, 2000); // short delay to simulate cracking process
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>pcracker</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
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
              color: #333;
            }

            .subtitle {
              margin-top: 10px;
              font-size: 1rem;
              color: #666;
            }

            section {
              max-width: 800px;
              margin: 30px auto;
              padding: 0 20px;
            }

            button {
              background-color: #007bff;
              color: #fff;
              padding: 10px 20px;
              border-radius: 4px;
              border: none;
              font-size: 1rem;
              cursor: pointer;
              font-weight: 500;
              transition: background-color 0.2s ease;
            }

            button:hover {
              background-color: #0056b3;
            }

            .status {
              margin-top: 20px;
              font-size: 1.2rem;
              color: #444;
            }

            .status.success {
              color: green;
            }

            .status.error {
              color: red;
            }
          `}
        </style>
      </head>
      <body>
        <header>
          <h1>pcracker</h1>
          <p className="subtitle">crack those passwords (or not... lol)</p>
        </header>
        <section>
          <button onClick={startCracking} disabled={isCracking}>
            {isCracking ? 'cracking...' : 'start cracking'}
          </button>
          <p className={`status ${crackStatus === 'successfully cracked! 🎉' ? 'success' : ''}`}>{crackStatus}</p>
        </section>
      </body>
    </>
  );
};

export default PcrackerPage;
