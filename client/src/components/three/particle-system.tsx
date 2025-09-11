import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ParticleSystem() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random particle positions
  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;     // x
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.001;
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00D4FF"
        size={0.03}
        transparent
        opacity={0.6}
      />
    </points>
  );
}
