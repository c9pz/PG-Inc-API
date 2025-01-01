import { useEffect, useState } from "react";

export default function NewYear2025() {
  const [showCountdown, setShowCountdown] = useState(true);
  const [fireworks, setFireworks] = useState(false);
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
        setFireworks(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Happy New Year 2025! 🎉</h1>
      {showCountdown && (
        <div style={styles.countdown}>
          <p style={styles.time}>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </p>
          <p style={styles.subText}>until midnight!</p>
        </div>
      )}
      {fireworks && <Fireworks />}
      {!showCountdown && (
        <p style={styles.message}>
          It's 2025! May your year be filled with joy and success! 🎆
        </p>
      )}
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
        this.size = Math.random() * 5 + 1;
        this.velocityX = (Math.random() - 0.5) * 5;
        this.velocityY = (Math.random() - 1) * 5;
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
        this.alpha -= 0.01;
      }
    }

    function createFirework(x, y) {
      const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffcc00", "#ff00ff"];
      for (let i = 0; i < 50; i++) {
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
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
    color: "#ffcc00",
  },
  countdown: {
    fontSize: "2rem",
    color: "#00ff00",
    marginBottom: "30px",
  },
  time: {
    fontSize: "4rem",
  },
  subText: {
    fontSize: "1.5rem",
    color: "#ccc",
  },
  message: {
    fontSize: "2rem",
    marginTop: "20px",
    color: "#ffcc00",
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
