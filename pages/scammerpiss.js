import React, { useState } from "react";
import "./ConvertScammer.css";

function ConvertScammer() {
  const [isConverted, setIsConverted] = useState(false);

  const handleConvert = () => {
    setIsConverted(true);
    setTimeout(() => {
      alert("The scammer has been successfully converted to piss!");
    }, 2000);
  };

  return (
    <div className="container">
      <h1>Scammer Conversion Machine</h1>
      <p>Press the button below to convert scammers into piss.</p>
      <div className={`scammer ${isConverted ? "converted" : ""}`}></div>
      <button onClick={handleConvert} disabled={isConverted}>
        {isConverted ? "Converted!" : "Convert Scammer to Piss"}
      </button>
    </div>
  );
}

export default ConvertScammer;
