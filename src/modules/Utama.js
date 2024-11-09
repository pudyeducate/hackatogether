"use client";
import Image from "next/image";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { OrbitControls, Stats } from "@react-three/drei";

export default function Utama() {
  const gltf = useLoader(GLTFLoader, "/diamond.gltf");

  return (
    <Canvas className="!h-[100vh]" camera={{ position: [-0.5, 1, 2] }} shadows>
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      <primitive
        object={gltf.scene}
        position={[0, 1, 0]}
        children-0-castShadow
      />
      <OrbitControls target={[0, 1, 0]} />
      <Stats />
    </Canvas>
  );
}
