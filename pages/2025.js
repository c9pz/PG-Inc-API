import { useEffect, useState, useRef } from "react";

export default function NewYear2025() {
  const [fireworksActive, setFireworksActive] = useState(true);
  const [stickmanActive, setStickmanActive] = useState(false);
  const [doodleParadeActive, setDoodleParadeActive] = useState(false);

  const canvasRef = useRef(null);

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

      const doodles = [
        { color: "red", x: doodleProgress, y: 150 },
        { color: "blue", x: doodleProgress + 150, y: 200 },
        { color: "green", x: doodleProgress + 300, y: 250 },
      ];

      doodles.forEach((doodle) => {
        drawDoodle(ctx, doodle.x, doodle.y, doodle.color);
        drawFlag(ctx, doodle.x + 20, doodle.y - 10);
      });

      doodleProgress += 5;
      if (doodleProgress < canvas.width + 300) {
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
        <div style={styles.messageContainer}>
          <h1 style={styles.happyNewYear}>🎉 happy new year 2025! 🎉</h1>
          <p style={styles.message}>
            yo! let's make 2025 the best year ever. time to vibe!
          </p>
        </div>
        <button onClick={handleDeployClick} style={styles.deployButton}>
          deploy pg inc
        </button>
      </div>
      {fireworksActive && <Fireworks />}
      {stickmanActive && <StickmanAnimation />}
      <canvas ref={canvasRef} style={styles.canvas}></canvas>
    </div>
  );
}

function Fireworks() {
  return null;
}

function StickmanAnimation() {
  return null;
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
    zIndex: 1,
  },
};
