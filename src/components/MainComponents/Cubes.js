import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Project.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cyan_-_baked"].geometry}
          material={materials["Box material 1"]}
          position={[-0.05, 0.06, -0.03]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Magenta.geometry}
          material={materials["Box material"]}
          position={[-0.01, 0.02, -0.01]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Green.geometry}
          material={materials["Box material 2"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Project.glb");
