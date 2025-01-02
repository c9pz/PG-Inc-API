import React from 'react';

const SignUpPage = () => {
  return (
    <div style={styles.container}>
      <a 
        style={styles.button} 
        data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up" 
        data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;releases signup prompt&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/rauenzi/BetterDiscordApp/releases&quot;,&quot;user_id&quot;:null}}" 
        data-hydro-click-hmac="4b6ed97c58fd41761fde33097d94f0918a196b1b3c530089ffc555280af1b61f" 
        href="/web/20200617022142/https://github.com/join?source=prompt-releases"
      >
        Sign up
      </a>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  }
};

export default SignUpPage;
