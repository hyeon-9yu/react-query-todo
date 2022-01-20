import React from 'react';

const Loader: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}
    >
      <p style={{ fontSize: '50px', textAlign: 'center', width: '100%' }}>loading...</p>
    </div>
  );
};

export default Loader;
