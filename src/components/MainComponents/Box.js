import React from "react";

import { RoundedBox } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

export default function Box(props) {
  const mesh = React.useRef();
  useFrame(({ clock }) => {
    mesh.current.rotation.x = clock.getElapsedTime();
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 1]}
      rotation={[0, 0.789, 0]}
      // position={[0, 0, 1]}
      // rotation={[0.6, 0.8, 0]}
    >
      <RoundedBox
        args={[3, 3, 3]} // Width, Height and Depth of the box
        radius={0.2} // Border-Radius of the box
        smoothness={30} // Optional, number of subdivisions
      >
        <meshLambertMaterial attach='material' color={props.color} />
      </RoundedBox>
      <ambientLight intensity={0.5} />
    </mesh>
  );
}
