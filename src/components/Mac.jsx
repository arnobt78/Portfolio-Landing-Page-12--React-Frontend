import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a as three } from "@react-spring/three";

/** Mac 3D model loaded from public/mac-draco.glb. useGLTF returns nodes (meshes) and materials; each mesh uses the GLB's geometry and material. Add mac-draco.glb to public/ for this to load. */
export default function Mac({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/mac-draco.glb");
  return (
    <group ref={group} {...props} dispose={null} >
      <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube008"].geometry}
        />
        <mesh
          material={materials["matte.001"]}
          geometry={nodes["Cube008_1"].geometry}
        />
        <mesh
          material={materials["screen.001"]}
          geometry={nodes["Cube008_2"].geometry}
        />
      </group>
    </group>
  );
}
