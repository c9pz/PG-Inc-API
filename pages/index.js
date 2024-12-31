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
              font-size: 2.25rem;
              font-weight: 600;
              margin: 0;
              color: #333;
            }

            p.subtitle {
              margin-top: 10px;
              font-size: 1rem;
              color: #666;
            }

            section {
              max-width: 800px;
              margin: 30px auto;
              padding: 0 20px;
            }

            h2 {
              font-size: 1.5rem;
              font-weight: 600;
              margin-bottom: 15px;
              color: #333;
            }

            p {
              margin-bottom: 20px;
              font-size: 1rem;
              color: #444;
            }

            .api-list {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              justify-content: flex-start;
            }

            .api-link {
              background-color: #007bff;
              color: #fff;
              padding: 10px 15px;
              border-radius: 4px;
              text-decoration: none;
              font-size: 0.9rem;
              font-weight: 500;
              transition: background-color 0.2s ease;
            }

            .api-link:hover {
              background-color: #0056b3;
            }

            footer {
              text-align: center;
              padding: 20px;
              font-size: 0.9rem;
              color: #666;
              background-color: #f9f9f9;
              border-top: 1px solid #e6e6e6;
            }

            ul {
              padding-left: 20px;
            }

            li {
              margin-bottom: 10px;
              font-size: 1rem;
              color: #444;
            }
          `}
        </style>
      </head>
      <body>
        <header>
          <h1>PG Inc API</h1>
          <p className="subtitle">Straightforward APIs for your projects.</p>
        </header>
        <section>
          <h2>APIs You Can Use</h2>
          <p>These are the endpoints available right now. Click one to test it or use it in your bot/app:</p>
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
              href="https://pg-inc-api.vercel.app/api/removeNums?text=Hello123World456"
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
          <h2>How to Use Them</h2>
          <ul>
            <li>Pick the API you need from the list.</li>
            <li>Replace placeholder values like <code>itemId</code> or <code>userId</code> with actual data.</li>
            <li>Copy the link and integrate it into your app, bot, or whatever you're building.</li>
          </ul>
        </section>
        <footer>
          <p>PG Inc API &copy; 2024</p>
        </footer>
      </body>
    </>
  );
};

export default HomePage;
