import React, { useState } from "react"

function Zx9fPjs4() {
  const [kL_ConvertedX, setkL_ConvertedX] = useState(false)

  const W7y49z = () => {
    setkL_ConvertedX(true)
    setTimeout(() => {
      alert("scammer converted to piss, lmao!")
    }, 2000)
  }

  return (
    <div className="container">
      <h1>scammer convertinator 5000</h1>
      <p>lmao piss</p>
      <div className={`scammer ${kL_ConvertedX ? "converted" : ""}`}>
        {!kL_ConvertedX && <span className={`warning-emoji ${kL_ConvertedX ? "melt" : ""}`}>⚠️</span>}
        {kL_ConvertedX && <div className="piss"></div>}
      </div>
      <button onClick={W7y49z} disabled={kL_ConvertedX}>
        {kL_ConvertedX ? "converted!" : "convert that scammer"}
      </button>

      <style jsx>{`
        .container {
          text-align: center;
          font-family: 'Comic Sans MS', sans-serif;
          margin: 50px auto;
          position: relative;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 40px;
        }

        .scammer {
          width: 100px;
          height: 150px;
          background-color: #555;
          margin: 20px auto;
          border-radius: 10px;
          position: relative;
          transition: all 2s ease-in-out;
        }

        .scammer.converted {
          width: 100px;
          height: 20px;
          background-color: #f0e68c;
          border-radius: 50%;
          animation: splash 1.5s ease-in-out infinite;
        }

        .warning-emoji {
          font-size: 2rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 1s ease, transform 1s ease;
        }

        .melt {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.5);
        }

        .piss {
          width: 100px;
          height: 20px;
          background-color: #f0e68c;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 50%;
        }

        button {
          padding: 12px 25px;
          font-size: 1.1rem;
          background: linear-gradient(90deg, rgba(33, 150, 243, 1) 0%, rgba(3, 169, 244, 1) 100%);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        button:hover {
          background: linear-gradient(90deg, rgba(3, 169, 244, 1) 0%, rgba(33, 150, 243, 1) 100%);
          transform: scale(1.05);
        }

        button:disabled {
          background: #cccccc;
          cursor: not-allowed;
        }

        @keyframes splash {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>

      <head>
        <link rel="icon" href="https://i.ibb.co/Z6GvX8q/JUSSI0-N-AVATAR-HEADSHOT-RBLX.png" />
        <title>scammer to piss</title>
        <meta property="og:title" content="scammer to piss" />
        <meta property="og:description" content="dwcs piss me off so thats why i made this" />
        <meta property="og:image" content="https://i.ibb.co/TBjcKqn/IMG-9842.jpg" />
        <meta property="og:url" content="https://pg-inc-api.vercel.app/scammerpiss" />
        <meta property="og:type" content="website" />
      </head>
    </div>
  )
}

export default Zx9fPjs4
