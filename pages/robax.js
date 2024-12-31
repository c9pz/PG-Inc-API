import { useState, useEffect } from "react";

export default function FpsBooster() {
  const [logs, setLogs] = useState([]);
  const [isBoosting, setIsBoosting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const logMessages = [
    "Initializing FPS boost...",
    "Overclocking your GPU...",
    "Diverting power to gaming modules...",
    "Maximizing core thermal efficiency...",
    "Loading turbo FPS algorithms...",
    "Reaching critical optimization threshold...",
    "Stabilizing quantum boost levels...",
    "FPS boosted successfully! Prepare for liftoff...",
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
      <h1 style={styles.title}>FPS Booster Pro</h1>
      {!isBoosting && !isComplete && (
        <button style={styles.button} onClick={startBoost}>
          Start FPS Boost
        </button>
      )}
      {isBoosting && (
        <div style={styles.loadingContainer}>
          <div style={styles.clock}>
            <div style={styles.clockCenter}></div>
            <div style={styles.clockHand}></div>
          </div>
        </div>
      )}
      <div style={styles.log}>
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
      {isComplete && (
        <div style={styles.success}>
          FPS Boost Complete! Your gaming rig is now in overdrive.
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#1a1a1a",
    color: "white",
    padding: "20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#00d1b2",
  },
  button: {
    padding: "15px 40px",
    fontSize: "1.2rem",
    backgroundColor: "#00d1b2",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "bold",
  },
  loadingContainer: {
    marginTop: "50px",
    position: "relative",
    width: "200px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  clock: {
    position: "relative",
    width: "100px",
    height: "100px",
    border: "5px solid #00d1b2",
    borderRadius: "50%",
    animation: "spin 0.5s linear infinite",
  },
  clockCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "10px",
    height: "10px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
  },
  clockHand: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "4px",
    height: "40px",
    backgroundColor: "#00d1b2",
    transformOrigin: "50% 100%",
    animation: "tick 0.1s linear infinite",
  },
  log: {
    marginTop: "20px",
    fontSize: "1rem",
    width: "80%",
    maxWidth: "600px",
    height: "200px",
    overflowY: "auto",
    backgroundColor: "#333",
    padding: "10px",
    borderRadius: "8px",
    color: "#ddd",
    textAlign: "left",
  },
  success: {
    marginTop: "30px",
    fontSize: "1.5rem",
    color: "#00d1b2",
  },
};

const animations = `
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes tick {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = animations;
  document.head.append(style);
}
