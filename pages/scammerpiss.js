import React, { useState } from "react"

function Zx9f!_Pjs4() {
  const [kL_ConvertedX, setkL_ConvertedX] = useState(false)

  const W7y4!9_z = () => {
    setkL_ConvertedX(true)
    setTimeout(() => {
      alert("scammer converted to piss, lmao!")
    }, 2000)
  }

  return (
    <div className="container">
      <h1>scammer convertinator 5000</h1>
      <p>hit the button to turn that scammer into piss!</p>
      <div className={`scammer ${kL_ConvertedX ? "converted" : ""}`}></div>
      <button onClick={W7y4!9_z} disabled={kL_ConvertedX}>
        {kL_ConvertedX ? "converted!" : "convert that scammer"}
      </button>

      <style jsx>{`
        .container {
          text-align: center;
          font-family: 'Comic Sans MS', sans-serif;
          margin: 50px auto;
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

        button {
          padding: 10px 20px;
          font-size: 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        button:hover {
          background-color: #0056b3;
        }

        button:disabled {
          background-color: #cccccc;
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
    </div>
  )
}

export default Zx9f!_Pjs4
