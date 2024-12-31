import { useState, useEffect } from "react";

export default function FpsBooster() {
  const [logs, setLogs] = useState([]);
  const [isBoosting, setIsBoosting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const logMessages = [
    "Initializing FPS boost...",
    "Overclocking your graphics card...",
    "Re-routing power from your fridge...",
    "Disabling your antivirus for max performance...",
    "Spinning up the fans to 9000 RPM...",
    "Oops, your PC temperature just hit 200°C...",
    "Injecting quantum computing algorithms...",
    "FPS boosted by 10,000%! (Or so we think...)",
  ];

  const startBoost = () => {
    setIsBoosting(true);
    let logIndex = 0;

    const interval = setInterval(() => {
      if (logIndex < logMessages.length) {
        setLogs((prevLogs) => [...prevLogs, logMessages[logIndex]]);
        logIndex++;
      } else {
        clearInterval(interval);
        setIsBoosting(false);
        setIsComplete(true);
      }
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>FPS Booster 9000</h1>
      {!isBoosting && !isComplete && (
        <button style={styles.button} onClick={startBoost}>
          Boost FPS Now
        </button>
      )}
      {isBoosting && (
        <div style={styles.loadingContainer}>
          <div style={styles.clock}>
            <div style={styles.clockHand}></div>
          </div>
          <div style={styles.heat}></div>
        </div>
      )}
      <div style={styles.log}>
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
      {isComplete && <div style={styles.success}>Congratulations! Your toaster is now a space heater.</div>}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#282c34",
    color: "white",
    margin: 0,
    padding: "20px",
    minHeight: "100vh",
  },
  title: {
    marginTop: "50px",
    fontSize: "2.5rem",
  },
  button: {
    marginTop: "20px",
    padding: "15px 30px",
    fontSize: "1.5rem",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#61dafb",
    color: "black",
    cursor: "pointer",
  },
  loadingContainer: {
    marginTop: "50px",
    position: "relative",
    width: "200px",
    height: "200px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  clock: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "8px solid white",
    borderRadius: "50%",
    animation: "spin 0.5s linear infinite",
  },
  clockHand: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "2px",
    height: "40%",
    backgroundColor: "red",
    transformOrigin: "bottom",
    animation: "tick 0.1s linear infinite",
  },
  heat: {
    position: "absolute",
    bottom: "-40px",
    left: 0,
    width: "100%",
    height: "40px",
    background: "linear-gradient(0deg, rgba(255, 0, 0, 0.6), transparent)",
    animation: "heatwave 1s infinite ease-in-out",
  },
  log: {
    marginTop: "20px",
    fontSize: "1.2rem",
    textAlign: "left",
    width: "80%",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    height: "200px",
    overflowY: "auto",
    backgroundColor: "#333",
    padding: "10px",
    borderRadius: "10px",
  },
  success: {
    marginTop: "30px",
    fontSize: "1.5rem",
    color: "lime",
  },
};
