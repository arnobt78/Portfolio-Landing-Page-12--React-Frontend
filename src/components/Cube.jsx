import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

/** 3D cube whose faces show a texture: a RenderTexture with animated "hello" text. useFrame moves the text each frame for a simple motion effect. */
const Cube = () => {
  const textRef = useRef();
  /* Run every frame; move text horizontally with sine wave for smooth back-and-forth. */
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        {/* RenderTexture renders the scene (camera + color + Text) into a texture used as the cube's material map. */}
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={3} color="#555">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
