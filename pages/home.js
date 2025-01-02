import React, { useEffect } from "react";

const EvilClonePage = () => {
  useEffect(() => {
    const invertColors = () => {
      document.body.style.filter = "invert(1)";
    };
    invertColors();
    return () => {
      document.body.style.filter = "none";
    };
  }, []);

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> evil pg inc api </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            body {
              font-family: 'Comic Sans MS', sans-serif;
              background-color: #111;
              color: #f55;
              margin: 0;
              padding: 0;
              line-height: 1.6;
              transform: rotate(-3deg);
            }

            header {
              padding: 20px;
              text-align: center;
              background-color: #222;
              border-bottom: 1px solid #f22;
            }

            h1 {
              font-size: 2.5rem;
              font-weight: 600;
              margin: 0;
              color: #ff4444;
              text-shadow: 2px 2px #000;
            }

            p.subtitle {
              margin-top: 10px;
              font-size: 1.2rem;
              color: #f99;
            }

            section {
              max-width: 800px;
              margin: 30px auto;
              padding: 0 20px;
              background: rgba(255, 0, 0, 0.1);
              border: 2px dashed #ff2222;
              transform: scale(0.98);
            }

            h2 {
              font-size: 1.8rem;
              font-weight: 600;
              margin-bottom: 15px;
              color: #ff4444;
              text-transform: uppercase;
            }

            p {
              margin-bottom: 20px;
              font-size: 1rem;
              color: #f88;
            }

            .api-list {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              justify-content: flex-start;
            }

            .api-link {
              background-color: #660000;
              color: #fff;
              padding: 12px 18px;
              border-radius: 4px;
              text-decoration: none;
              font-size: 1rem;
              font-weight: 600;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
              transition: transform 0.3s ease;
            }

            .api-link:hover {
              transform: rotate(-2deg) scale(1.1);
              background-color: #ff5555;
            }

            footer {
              text-align: center;
              padding: 20px;
              font-size: 1rem;
              color: #f88;
              background-color: #222;
              border-top: 1px dashed #f22;
            }

            ul {
              padding-left: 25px;
              list-style: none;
            }

            li {
              margin-bottom: 10px;
              font-size: 1rem;
              color: #f77;
              position: relative;
            }

            li:before {
              content: "👾";
              position: absolute;
              left: -25px;
            }
          `}
        </style>
      </head>
      <body>
        <header>
          <h1> evil pg inc api </h1>
          <p className="subtitle">
            totally cursed apis for your most evil projects
          </p>
        </header>
        <section>
          <h2>apis you should probably avoid</h2>
          <p>these apis might just doom your project:</p>
          <div className="api-list">
            <a
              href="https://pg-inc-api.vercel.app/api/rarity?itemId=666"
              className="api-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              cursed rarity api (how doomed is your item?)
            </a>
            <a
              href="https://pg-inc-api.vercel.app/api/removeNums?text=Evil123Rules666"
              className="api-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              cursed number remover (digits are overrated)
            </a>
            <a
              href="https://pg-inc-api.vercel.app/api/friendsCount?userId=13"
              className="api-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              cursed friends count (you're not as popular as you think)
            </a>
            <a
              href="https://pg-inc-api.vercel.app/api/groupsCount?userId=666"
              className="api-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              cursed groups count (are you even in a group?)
            </a>
          </div>
        </section>
        <section>
          <h2>how to summon them</h2>
          <ul>
            <li>pick a cursed api</li>
            <li>
              replace the placeholder stuff like <code>itemId</code> or{" "}
              <code>userId</code> with your dark desires
            </li>
            <li>invoke the api and watch chaos unfold</li>
          </ul>
        </section>
        <footer>
          <p> evil pg inc api &copy; 2025 </p>
        </footer>
      </body>
    </>
  );
};

export default EvilClonePage;
