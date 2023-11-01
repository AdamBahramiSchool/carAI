import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lamb from './Lamb.jsx';
import LambRotate from './LambRotate.js';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

function ThreejsLamb() {
  return (
    <div style={containerStyle}>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [10, 10, 20] }} // Adjust the camera position to zoom out
        onCreated={({ gl }) => {
          // Calculate the aspect ratio based on the window width and height
          const { innerWidth, innerHeight } = window;
          const aspect = innerWidth / innerHeight;

          // Set the aspect ratio for the camera
          gl.setPixelRatio(window.devicePixelRatio);
          gl.setSize(innerWidth, innerHeight);
        }}
      >
        <OrbitControls enableZoom={true} /> {/* Allow zooming with OrbitControls */}
        <ambientLight intensity={3} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <LambRotate />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ThreejsLamb;
