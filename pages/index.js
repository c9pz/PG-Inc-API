import React from 'react';

const HomePage = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>pg inc api</title>
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
              transition: background-color 0.2s ease, transform 0.3s ease;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .api-link:hover {
              background-color: #0056b3;
              transform: scale(1.05);
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
          <h1>pg inc api</h1>
          <p className="subtitle">super simple apis for whatever weird project you're working on</p>
        </header>
        <section>
          <h2>apis you can totally use</h2>
          <p>here are some cool apis you can mess around with:</p>
          <div className="api-list">
            <a
              href="https://pg-inc-api.vercel.app/api/rarity?itemId=123456"
              className="api-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              item rarity api (seriously, how rare is that item tho?)
            </a>
            <a
              href="https://pg-inc-api.vercel.app/api/removeNums?text=Hello123World456"
              className="api-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              remove numbers api (bye-bye, unnecessary digits)
            </a>
            <a
              href="https://pg-inc-api.vercel.app/api/friendsCount?userId=1"
              className="api-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              friends count api (how popular are you, really?)
            </a>
            <a
              href="https://pg-inc-api.vercel.app/api/groupsCount?userId=1"
              className="api-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              groups count api (are you in ALL the groups yet?)
            </a>
          </div>
        </section>
        <section>
          <h2>how to use them</h2>
          <ul>
            <li>pick an api</li>
            <li>replace the placeholder stuff like <code>itemId</code> or <code>userId</code> with the actual stuff</li>
            <li>copy the link and stick it into your project (or bot, or whatever you're building)</li>
          </ul>
        </section>
        <footer>
          <p>pg inc api &copy; 2025</p>
        </footer>
      </body>
    </>
  );
};

export default HomePage;
