import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Lamb from './Lamb.jsx'
const LambRotate = () => {
  const lambRef = useRef();

  // Define the rotation speed (in radians per second)
  const rotationSpeed = 0.5;

  useFrame(() => {
    // Rotate the Lamborghini object around its y-axis
    if (lambRef.current) {
      lambRef.current.rotation.y += rotationSpeed * 1 / 60; // 1/60 is the frame rate
    }
  });

  return (
    <mesh ref={lambRef}>
      <Lamb/>
    </mesh>
  );
};

export default LambRotate;
