import { useEffect, useState } from "react";

export default function NewYear2025() {
  const [showCountdown, setShowCountdown] = useState(true);
  const [fireworksActive, setFireworksActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(new Date("2025-01-01T00:00:00"))
  );

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
      </div>
      {fireworksActive && <Fireworks />}
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
  useEffect(() => {
    const canvas = document.getElementById("fireworksCanvas");
    const ctx = canvas.getContext("2d");
    const particles = [];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 3 + 1;
        this.velocityX = (Math.random() - 0.5) * 6;
        this.velocityY = (Math.random() - 1) * 6;
        this.alpha = 1;
      }
      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.alpha -= 0.02;
      }
    }

    function createFirework(x, y) {
      const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#33FF57", "#5733FF"];
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
          particles.splice(index, 1);
        } else {
          particle.draw();
          particle.update();
        }
      });
      requestAnimationFrame(animate);
    }

    canvas.addEventListener("click", (e) => {
      createFirework(e.clientX, e.clientY);
    });

    animate();
  }, []);

  return <canvas id="fireworksCanvas" style={styles.canvas}></canvas>;
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
  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
};
