import React from 'react';

const TestButton = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <a 
        className="btn btn-primary" 
        href="https://pg-inc-api.vercel.app/testingarea" 
        style={{
          -webkitTextSizeAdjust: '100%',
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
          wordWrap: 'break-word',
          textDecoration: 'none',
          display: 'inline-block',
          padding: '6px 12px',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: '20px',
          backgroundColor: '#28a745',
          backgroundImage: 'linear-gradient(-180deg, #34d058, #28a745 90%)',
          border: '1px solid rgba(27,31,35,.2)',
          borderRadius: '.25em',
          cursor: 'pointer',
          color: '#fff',
          textAlign: 'center',
          whiteSpace: 'nowrap'
        }}
      >
        Test
      </a>
    </div>
  );
}

export default TestButton;
