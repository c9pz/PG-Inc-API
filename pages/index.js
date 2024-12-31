import React from 'react';

const HomePage = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PG Inc API</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            body {
                font-family: 'Source Sans Pro', sans-serif;
                background-color: #ffffff;
                color: #1a1a1a;
                margin: 0;
                padding: 0;
                line-height: 1.6;
            }
            header {
                background-color: #f5f5f5;
                padding: 20px;
                text-align: center;
                border-bottom: 1px solid #e0e0e0;
            }
            h1 {
                font-size: 2.5rem;
                margin: 0;
                font-weight: 600;
                color: #333333;
            }
            p.subtitle {
                font-size: 1rem;
                margin-top: 10px;
                color: #666666;
            }
            section {
                max-width: 800px;
                margin: 30px auto;
                padding: 20px;
            }
            h2 {
                font-size: 1.75rem;
                font-weight: 600;
                margin-bottom: 15px;
                color: #333333;
            }
            p {
                font-size: 1rem;
                color: #4a4a4a;
                margin-bottom: 20px;
            }
            .api-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                justify-content: flex-start;
            }
            .api-link {
                background-color: #0070f3;
                color: #ffffff;
                padding: 10px 15px;
                border-radius: 4px;
                text-decoration: none;
                font-size: 0.875rem;
                font-weight: 500;
                transition: background-color 0.2s;
            }
            .api-link:hover {
                background-color: #0056c1;
            }
            footer {
                padding: 20px;
                text-align: center;
                font-size: 0.9rem;
                background-color: #f5f5f5;
                border-top: 1px solid #e0e0e0;
                color: #666666;
            }
            ul {
                padding-left: 20px;
            }
            li {
                margin-bottom: 10px;
                font-size: 1rem;
                color: #4a4a4a;
            }
          `}
        </style>
      </head>

      <body>
        <header>
          <h1>PG Inc API</h1>
          <p className="subtitle">Streamlined APIs for your Roblox projects</p>
        </header>

        <section>
          <h2>Available APIs</h2>
          <p>Browse the tools below and use them in your apps and bots:</p>
          <div className="api-list">
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
          </div>
        </section>

        <section>
          <h2>How to Use</h2>
          <ul>
            <li>Select an API from the list above.</li>
            <li>Click the link to see an example with placeholder values.</li>
            <li>Replace the parameters like <code>itemId</code> or <code>userId</code> with your data.</li>
            <li>Copy the URL and integrate it into your application.</li>
          </ul>
        </section>

        <footer>
          <p>PG Inc API &copy; 2024 - Powered by Vercel</p>
        </footer>
      </body>
    </>
  );
};

export default HomePage;
