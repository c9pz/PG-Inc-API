import { useEffect, useState, useRef } from "react";

export default function NewYear2025() {
  const [showCountdown, setShowCountdown] = useState(true);
  const [fireworksActive, setFireworksActive] = useState(false);
  const [stickmanActive, setStickmanActive] = useState(false);
  const [doodleParadeActive, setDoodleParadeActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(new Date("2025-01-01T00:00:00"))
  );

  const doodles = [
    { color: "red", x: -50, y: 150 },
    { color: "blue", x: -150, y: 200 },
    { color: "green", x: -250, y: 250 },
  ];

  const canvasRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft(new Date("2025-01-01T00:00:00"));
      setTimeLeft(updatedTimeLeft);

      if (
        updatedTimeLeft.days === 0 &&
        updatedTimeLeft.hours === 0 &&
        updatedTimeLeft.minutes === 0 &&
        updatedTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
        setShowCountdown(false);
        setFireworksActive(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDeployClick = () => {
    setStickmanActive(true);
    setDoodleParadeActive(true);
  };

  useEffect(() => {
    if (!doodleParadeActive) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 400;

    let doodleProgress = 0;
    let animationFrameId;

    const drawDoodle = (ctx, x, y, color) => {
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      ctx.fillStyle = "white";
      ctx.font = "12px Arial";
      ctx.fillText(":)", x - 10, y + 5);
    };

    const drawFlag = (ctx, x, y) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y - 30);
      ctx.lineTo(x + 20, y - 20);
      ctx.closePath();
      ctx.fillStyle = "yellow";
      ctx.fill();
    };

    const animateParade = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      doodles.forEach((doodle, index) => {
        const doodleX = doodle.x + doodleProgress + index * 150;
        drawDoodle(ctx, doodleX, doodle.y, doodle.color);
        drawFlag(ctx, doodleX + 20, doodle.y - 10);
      });

      doodleProgress += 2;
      if (doodleProgress < canvas.width + 200) {
        animationFrameId = requestAnimationFrame(animateParade);
      } else {
        cancelAnimationFrame(animationFrameId);
        setDoodleParadeActive(false);
      }
    };

    animateParade();
  }, [doodleParadeActive]);

  return (
    <div style={styles.container}>
      <div style={styles.centerContent}>
        {showCountdown && (
          <>
            <h1 style={styles.title}>New Year 2025 Countdown</h1>
            <div style={styles.countdown}>
              <span style={styles.timeBox}>{timeLeft.days}</span>
              <span style={styles.label}>Days</span>
              <span style={styles.timeBox}>{timeLeft.hours}</span>
              <span style={styles.label}>Hours</span>
              <span style={styles.timeBox}>{timeLeft.minutes}</span>
              <span style={styles.label}>Minutes</span>
              <span style={styles.timeBox}>{timeLeft.seconds}</span>
              <span style={styles.label}>Seconds</span>
            </div>
          </>
        )}
        {!showCountdown && (
          <div style={styles.messageContainer}>
            <h1 style={styles.happyNewYear}>🎆 Happy New Year 2025! 🎆</h1>
            <p style={styles.message}>
              Wishing you a year filled with joy, success, and celebration!
            </p>
          </div>
        )}
        <button onClick={handleDeployClick} style={styles.deployButton}>
          Deploy PG Inc
        </button>
      </div>
      {fireworksActive && <Fireworks />}
      {stickmanActive && <StickmanAnimation />}
      <canvas ref={canvasRef} style={styles.canvas}></canvas>
    </div>
  );
}

function calculateTimeLeft(targetDate) {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function Fireworks() {
  // Fireworks logic as previously defined.
}

function StickmanAnimation() {
  // Stickman animation logic as previously defined.
}

const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    textAlign: "center",
    background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
    color: "#fff",
    height: "100vh",
    margin: 0,
    overflow: "hidden",
    position: "relative",
  },
  centerContent: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  countdown: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  timeBox: {
    fontSize: "3rem",
    fontWeight: "bold",
    background: "rgba(255, 255, 255, 0.2)",
    padding: "10px 20px",
    borderRadius: "10px",
  },
  label: {
    fontSize: "1rem",
    marginTop: "20px",
  },
  messageContainer: {
    textAlign: "center",
  },
  happyNewYear: {
    fontSize: "3rem",
    marginBottom: "10px",
  },
  message: {
    fontSize: "1.5rem",
    marginTop: "10px",
  },
  deployButton: {
    background: "#ff0",
    color: "#000",
    border: "2px solid #000",
    fontSize: "1.2rem",
    padding: "10px 20px",
    cursor: "pointer",
    fontFamily: "'Comic Sans MS', sans-serif",
    transform: "rotate(-5deg)",
    marginTop: "30px",
  },
  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
};
