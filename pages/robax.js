import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { OAuth2 } from "discord-oauth2"; // Example of Discord OAuth library

const DiscordLogin = () => {
  const [discordUser, setDiscordUser] = useState(null);
  
  useEffect(() => {
    if (discordUser) {
      init3DWorld();
    }
  }, [discordUser]);

  const loginWithDiscord = async () => {
    // Redirect to Discord OAuth2
    const oauth = new OAuth2();
    const user = await oauth.getUserAccessToken();
    setDiscordUser(user);
  };

  const init3DWorld = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    const light = new THREE.AmbientLight(0x404040); 
    scene.add(light);
    
    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  };

  return (
    <div>
      {discordUser ? (
        <div>
          <h1>Welcome, {discordUser.username}!</h1>
          {/* 3D world will appear here */}
        </div>
      ) : (
        <button onClick={loginWithDiscord}>Login with Discord</button>
      )}
    </div>
  );
};

export default DiscordLogin;
