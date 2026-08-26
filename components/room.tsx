import { useRef} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { animated } from '@react-spring/three'
import { OrbitControls, Plane } from '@react-three/drei'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three'

function Room (props: any) {
  //const gltf = useLoader(GLTFLoader, '/flower.gltf')
  const meshRef = useRef(null!);


  return (<>
    <animated.mesh
    ref={meshRef}      
    {...props}
    >
       <sphereGeometry/>
  		<meshStandardMaterial color='red'/>   
    </animated.mesh>
    <mesh position={[-5, 0,-25]} rotation={[0,Math.PI / 2,0]} scale={[6, 8, .5]}>
    <boxGeometry/>
  		<meshStandardMaterial color='blue'/>   
    </mesh>
    <mesh position={[5, 0,-25]} rotation={[0,Math.PI / 2,0]} scale={[6, 8, .5]}>
    <boxGeometry/>
  		<meshStandardMaterial color='blue'/>   
    </mesh>
    <mesh position={[0, -3,-25]} rotation={[Math.PI / 2, 0 ,0]} scale={[9, 6, .5]}>
    <boxGeometry/>
  		<meshStandardMaterial color='teal'/>   
    </mesh>
    </>
  )
}

export default function Roomtest() {
  return (
    <Canvas orthographic camera={{zoom: 100, position: [0,0,100]}} style={{height: 700 }}>
      {/* <color attach="background" args={['blue']} /> */}
      <ambientLight intensity={0.5} />      
      <spotLight position={[30, 30, 10]} angle={0.15} penumbra={1} />      
      <pointLight position={[-10, -10, -10]} />
        <Room />
    </Canvas>
  )
}