import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import useSystemTheme from "../hook/systemTheme";
import Computer from "./Computer";

const ContactExperience = () => {
  const theme = useSystemTheme();
  return (
    <Canvas
      shadows
      camera={{ position: [-8, 3, 5], fov: 45 }}

    >
      <ambientLight intensity={0.5} color="#ffffff" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffffff" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffffff"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />


      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color={theme == 'dark' ? '#000000' : '#8F8B8BFF'} />
        </mesh>
      </group>

      {/* Your 3D model */}
      <group scale={0.03} position={[0, -2, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
