import React, { useState, useEffect } from "react"
import "./ConvertScammer.css"

function ConvertScammer() {
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

export default ConvertScammer
