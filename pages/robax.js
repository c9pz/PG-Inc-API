<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FPS Booster 9000</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #282c34;
      color: white;
      margin: 0;
      padding: 0;
    }
    h1 {
      margin-top: 50px;
      font-size: 2.5rem;
    }
    button {
      margin-top: 20px;
      padding: 15px 30px;
      font-size: 1.5rem;
      border: none;
      border-radius: 10px;
      background-color: #61dafb;
      color: black;
      cursor: pointer;
    }
    button:hover {
      background-color: #21a1f1;
    }
    #progress {
      margin-top: 50px;
      font-size: 1.2rem;
      height: 30px;
      line-height: 30px;
      width: 80%;
      max-width: 600px;
      background-color: #555;
      border-radius: 15px;
      overflow: hidden;
      margin-left: auto;
      margin-right: auto;
      display: none;
    }
    #progress-bar {
      width: 0;
      height: 100%;
      background-color: #61dafb;
    }
    #log {
      margin-top: 20px;
      font-size: 1.2rem;
      text-align: left;
      width: 80%;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      height: 200px;
      overflow-y: auto;
      background-color: #333;
      padding: 10px;
      border-radius: 10px;
      display: none;
    }
    #success {
      display: none;
      margin-top: 30px;
      font-size: 1.5rem;
      color: lime;
    }
  </style>
</head>
<body>
  <h1>FPS Booster 9000</h1>
  <button onclick="startBoost()">Boost FPS Now</button>
  <div id="progress">
    <div id="progress-bar"></div>
  </div>
  <div id="log"></div>
  <div id="success">Congratulations! Your toaster is now a space heater.</div>

  <script>
    const logMessages = [
      "Initializing FPS boost...",
      "Overclocking your graphics card...",
      "Re-routing power from your fridge...",
      "Disabling your antivirus for max performance...",
      "Spinning up the fans to 9000 RPM...",
      "Oops, your PC temperature just hit 200°C...",
      "Injecting quantum computing algorithms...",
      "FPS boosted by 10,000%! (Or so we think...)"
    ];

    function startBoost() {
      document.querySelector("button").style.display = "none";
      document.getElementById("progress").style.display = "block";
      document.getElementById("log").style.display = "block";
      let progress = 0;
      let logIndex = 0;

      const progressBar = document.getElementById("progress-bar");
      const log = document.getElementById("log");

      const interval = setInterval(() => {
        if (progress < 100) {
          progress += 10;
          progressBar.style.width = progress + "%";

          if (logIndex < logMessages.length) {
            log.innerHTML += `<p>${logMessages[logIndex]}</p>`;
            log.scrollTop = log.scrollHeight;
            logIndex++;
          }
        } else {
          clearInterval(interval);
          document.getElementById("progress").style.display = "none";
          document.getElementById("success").style.display = "block";
        }
      }, 1000);
    }
  </script>
</body>
</html>
