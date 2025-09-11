import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingIconProps {
  position: [number, number, number];
  color: string;
  delay?: number;
}

function FloatingIcon({ position, color, delay = 0 }: FloatingIconProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.5;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.1;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshBasicMaterial color={color} transparent opacity={0.7} />
    </mesh>
  );
}

export function FloatingIcons() {
  const icons = [
    { position: [4, 2, -2] as [number, number, number], color: "#00D4FF", delay: 0 },
    { position: [-4, 1, -1] as [number, number, number], color: "#9933FF", delay: 1 },
    { position: [3, -1, -3] as [number, number, number], color: "#00FF66", delay: 2 },
    { position: [-3, -2, -2] as [number, number, number], color: "#FF00FF", delay: 3 },
  ];

  return (
    <>
      {icons.map((icon, index) => (
        <FloatingIcon key={index} {...icon} />
      ))}
    </>
  );
}
