import React, { useState, useEffect } from "react";
import styles from "../ConvertScammer.module.css";  // Import the CSS module

function ConvertScammer() {
  const [isConverted, setIsConverted] = useState(false);
  const [isBiggerPiss, setIsBiggerPiss] = useState(false);
  const [isFloodPiss, setIsFloodPiss] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleConvert = () => {
    setIsConverted(true);
    setTimeout(() => {
      alert("Scammer converted to piss, lmao!");
    }, 2000);
  };

  const handleBiggerPiss = () => {
    setIsBiggerPiss(true);
    setTimeout(() => {
      setIsFloodPiss(true);
    }, 1000);
  };

  const handleFloodPiss = () => {
    setTimeout(() => {
      setIsGameOver(true);
    }, 1000);
  };

  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    const disableShortcuts = (e) => {
      if (e.ctrlKey && ["u", "U", "i", "I", "c", "C", "j", "J"].includes(e.key)) {
        e.preventDefault();
      }
      if ([123].includes(e.keyCode)) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", disableShortcuts);

    const disableTextSelection = () => false;
    document.addEventListener("selectstart", disableTextSelection);

    const disableDragging = (e) => e.preventDefault();
    document.addEventListener("dragstart", disableDragging);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableShortcuts);
      document.removeEventListener("selectstart", disableTextSelection);
      document.removeEventListener("dragstart", disableDragging);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>Scammer Convertinator 5000</h1>
      <p>Hit the button to turn that scammer into piss!</p>
      <div className={`${styles.scammer} ${isConverted ? styles.converted : ""} ${isBiggerPiss ? styles.biggerPiss : ""}`}></div>
      <button onClick={handleConvert} disabled={isConverted}>
        {isConverted ? "Converted!" : "Convert that Scammer"}
      </button>
      {isConverted && !isBiggerPiss && (
        <button onClick={handleBiggerPiss}>Bigger Piss</button>
      )}
      {isBiggerPiss && !isFloodPiss && (
        <button onClick={handleFloodPiss}>Flood Piss LMAO</button>
      )}
      {isFloodPiss && !isGameOver && (
        <div className={styles.floodPiss}></div>
      )}
      {isGameOver && (
        <>
          <div className={styles.gameOverText}>You pissed me off...</div>
          <button onClick={() => window.location.reload()}>Restart</button>
        </>
      )}
    </div>
  );
}

export default ConvertScammer;
