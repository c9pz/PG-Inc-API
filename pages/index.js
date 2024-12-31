import React from 'react';

const HomePage = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PG Inc API</title>
        <style>
          {`
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                margin: 0;
                padding: 0;
            }
            header {
                background-color: #333;
                color: white;
                padding: 20px;
                text-align: center;
            }
            h1 {
                margin: 0;
            }
            section {
                padding: 20px;
                text-align: center;
            }
            .api-link {
                display: inline-block;
                background-color: #007BFF;
                color: white;
                padding: 10px 20px;
                margin: 10px;
                border-radius: 5px;
                text-decoration: none;
            }
            .api-link:hover {
                background-color: #0056b3;
            }
          `}
        </style>
      </head>

      <body>
        <header>
          <h1>PG Inc API</h1>
          <p>Welcome to the PG Inc API documentation and service hub.</p>
        </header>

        <section>
          <h2>Available APIs</h2>
          <p>Check out the following API endpoints for various services:</p>
          <a
            href="https://pg-inc-api.vercel.app/api/rarity?itemId=123456"
            className="api-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Item Rarity API
          </a>
          <a
            href="https://pg-inc-api.vercel.app/api/removeNumbers?text=Hello123World456"
            className="api-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Remove Numbers API
          </a>
          <a
            href="https://pg-inc-api.vercel.app/api/friendsCount?userId=1"
            className="api-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Friends Count API
          </a>
          <a
            href="https://pg-inc-api.vercel.app/api/groupsCount?userId=1"
            className="api-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Groups Count API
          </a>
        </section>

        <section>
          <h2>How to Use</h2>
          <p>
            To use an API, simply replace the URL parameters accordingly. For
            example, replace the item ID or user ID as required.
          </p>
        </section>

        <footer>
          <p style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
            PG Inc API - Powered by Vercel
          </p>
        </footer>
      </body>
    </>
  );
};

export default HomePage;
