import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {useLoader} from "@react-three/fiber"
import { BoxGeometry, Mesh, MeshLambertMaterial } from 'three';
import {OrbitControls} from "@react-three/drei"
import {TextureLoader} from 'three/src/loaders/TextureLoader';
import texture from "./textures/goldenLayer.jpg"
function CustomBox() {
    const colorMap=useLoader(TextureLoader,texture)
    const boxGeometry = new BoxGeometry(3, 3, 3, 2, 2, 2); // Adjust the last three parameters for sharper corners
    const material = new MeshLambertMaterial({ color: 'blue' });
  
    return (
      <mesh geometry={boxGeometry} material={material} rotation={[90,0,20]}>
        <meshStandardMaterial map={colorMap}/>
      </mesh>
    );
  }

  export default CustomBox;