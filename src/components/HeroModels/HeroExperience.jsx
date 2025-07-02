import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLight from './HeroLight';
import Particles from './Particles';
import Aurora from '../Aurora';
const HeroExperience = () => {
  const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
  const isMobile = useMediaQuery({query: '(max-width: 768px)'});
  return (
    
    <Canvas className='w-2 h-4' camera={{position: [0,0,15], fov:45}}>
     
      <OrbitControls 
      enablePan={false} 
      minDistance={5}
      maxDistance={20}
      minPolarAngle={Math.PI / 5}
      maxPolarAngle={Math.PI / 2}
      />
     <HeroLight />
      <Particles count={100}/>
      <group scale={isMobile ? 0.7 : 1} 
      position={isMobile ? [0, -3.5, 0] : isTablet ? [0, -2, 0] : [0, -3.7, 0]}
      rotation={[0, -Math.PI / 3, 0]}
      >
         <Room/>
      </group>
     
    </Canvas>
  )
}

export default HeroExperience;