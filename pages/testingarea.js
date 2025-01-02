import React from 'react';

const SignUpPage = () => {
  return (
    <div style={styles.container}>
      <a 
        style={styles.button} 
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
    padding: '10px 25px',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: '#5e5e5e',
    color: '#ffffff',
    border: '2px solid #3d3d3d',
    borderRadius: '3px',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    boxShadow: 'inset 0 1px 0 #d1d1d1',
    transition: 'all 0.3s ease-in-out',
  },
};

export default SignUpPage;
