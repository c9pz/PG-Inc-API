import React, { useState, useEffect } from "react"
function scammertopiss() {
  const [isConverted, setIsConverted] = useState(false)

  const handleConvert = () => {
    setIsConverted(true)
    setTimeout(() => {
      alert("scammer converted to piss, lmao!")
    }, 2000)
  }

  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault()
    document.addEventListener("contextmenu", disableRightClick)

    const disableShortcuts = (e) => {
      if (
        e.ctrlKey &&
        ["u", "U", "i", "I", "c", "C", "j", "J"].includes(e.key)
      ) {
        e.preventDefault()
      }
      if ([123].includes(e.keyCode)) {
        e.preventDefault()
      }
    }
    document.addEventListener("keydown", disableShortcuts)

    const disableTextSelection = () => false
    document.addEventListener("selectstart", disableTextSelection)

    const disableDragging = (e) => e.preventDefault()
    document.addEventListener("dragstart", disableDragging)

    return () => {
      document.removeEventListener("contextmenu", disableRightClick)
      document.removeEventListener("keydown", disableShortcuts)
      document.removeEventListener("selectstart", disableTextSelection)
      document.removeEventListener("dragstart", disableDragging)
    }
  }, [])

  return (
    <div className="container">
      <h1>scammer convertinator 5000</h1>
      <p>hit the button to turn that scammer into piss!</p>
      <div className={`scammer ${isConverted ? "converted" : ""}`}></div>
      <button onClick={handleConvert} disabled={isConverted}>
        {isConverted ? "converted!" : "convert that scammer"}
      </button>
    </div>
  )
}

export default scammertopiss

// css
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
