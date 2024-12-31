import { useState, useEffect, useRef } from "react";

export default function FpsBooster() {
  const [logs, setLogs] = useState([]);
  const [isBoosting, setIsBoosting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showSpaceship, setShowSpaceship] = useState(false);
  const [screenBroken, setScreenBroken] = useState(false);
  const canvasRef = useRef(null);
  const spaceshipRef = useRef(null);

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
        setTimeout(() => {
          setShowSpaceship(true);
          setTimeout(() => {
            setScreenBroken(true);
          }, 5000);
        }, 1000);
      }
    }, 1000);
  };

  useEffect(() => {
    if (showSpaceship && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      const spaceship = {
        x: 200,
        y: 300,
        width: 40,
        height: 40,
        angle: 0,
        speed: 2,
        draw: function () {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.angle);
          ctx.beginPath();
          ctx.moveTo(0, -this.height / 2);
          ctx.lineTo(-this.width / 2, this.height / 2);
          ctx.lineTo(this.width / 2, this.height / 2);
          ctx.closePath();
          ctx.fillStyle = "#ffcc00";
          ctx.fill();
          ctx.restore();
        },
        update: function () {
          this.x += this.speed * Math.cos(this.angle);
          this.y += this.speed * Math.sin(this.angle);
          this.angle += 0.05;
        },
      };

      spaceshipRef.current = spaceship;

      const animateSpaceship = () => {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        spaceshipRef.current.update();
        spaceshipRef.current.draw();
        if (spaceshipRef.current.x > window.innerWidth || spaceshipRef.current.y > window.innerHeight || spaceshipRef.current.x < 0 || spaceshipRef.current.y < 0) {
          spaceshipRef.current.x = 200;
          spaceshipRef.current.y = 300;
        }
        requestAnimationFrame(animateSpaceship);
      };
      animateSpaceship();
    }
  }, [showSpaceship]);

  return (
    <div style={screenBroken ? styles.screenBroken : styles.container}>
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
      {isComplete && !showSpaceship && (
        <div style={styles.success}>
          FPS Boost Complete! Your gaming rig is now in overdrive.
        </div>
      )}
      {showSpaceship && (
        <div style={styles.canvasContainer}>
          <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
        </div>
      )}
      {screenBroken && (
        <div style={styles.breakText}>
          Oops! I think I abused the spaceship's powers.
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
    overflow: "hidden",
  },
  screenBroken: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#000",
    color: "white",
    padding: "20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    animation: "break 2s forwards",
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
  canvasContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
  },
  breakText: {
    fontSize: "2rem",
    color: "#f00",
    animation: "fadeIn 2s forwards",
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

@keyframes fly {
  0% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(200%, -200%);
  }
}

@keyframes break {
  0% {
    background-color: #1a1a1a;
  }
  100% {
    background-color: #000;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = animations;
  document.head.append(style);
}
