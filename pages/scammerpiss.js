import React, { useState, useEffect } from "react"
import "./ConvertScammer.css";

function ConvertScammer() {
  const [isConverted, setIsConverted] = useState(false)
  const [isBigger, setIsBigger] = useState(false)
  const [flooding, setFlooding] = useState(false)
  const [showRestart, setShowRestart] = useState(false)

  const handleConvert = () => {
    setIsConverted(true)
    setTimeout(() => {
      alert("scammer converted to piss, lmao!")
    }, 2000)
  }

  const handleBiggerPiss = () => {
    setIsBigger(true)
    setTimeout(() => {
      setFlooding(true)
    }, 500)
  }

  const handleFloodPiss = () => {
    setFlooding(true)
    setTimeout(() => {
      setShowRestart(true)
    }, 3000)
  }

  const handleRestart = () => {
    setIsConverted(false)
    setIsBigger(false)
    setFlooding(false)
    setShowRestart(false)
  }

  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault()
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
    const disableTextSelection = () => false
    const disableDragging = (e) => e.preventDefault()

    document.addEventListener("contextmenu", disableRightClick)
    document.addEventListener("keydown", disableShortcuts)
    document.addEventListener("selectstart", disableTextSelection)
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
      <div className={`scammer ${isConverted ? "converted" : ""} ${isBigger ? "bigger" : ""} ${flooding ? "flooding" : ""}`}></div>
      <button onClick={handleConvert} disabled={isConverted}>
        {isConverted ? "converted!" : "convert that scammer"}
      </button>
      {isConverted && !isBigger && (
        <button onClick={handleBiggerPiss}>bigger piss</button>
      )}
      {isBigger && !flooding && (
        <button onClick={handleFloodPiss}>FLOOD PISS LMAO</button>
      )}
      {flooding && (
        <div className="flood-effect">
          <div className="piss-liquid"></div>
        </div>
      )}
      {showRestart && (
        <div>
          <p>you pissed me off..</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  )
}

export default ConvertScammer
