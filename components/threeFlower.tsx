import { useRef, useState, createRef, useEffect, useCallback } from 'react'
import { Canvas, useFrame, events, useThree, useLoader } from '@react-three/fiber'
import { Mesh } from 'three' 
import { EventTypes, useGesture } from '@use-gesture/react'
import { useSpring } from 'react-spring'
import { animated } from '@react-spring/three'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function Flower (props) {
  // This reference gives us direct access to the THREE.Mesh object.
  const gltf = useLoader(GLTFLoader, '/flower.gltf')
  const meshRef = useRef()

  const [spring, set] = useSpring(() => ({ scale: [1, 1, 1], position: [0, 0, 0], rotation: [1.7, -.2, -.2], config: { friction: 10 } }))

  // Return the view.
  // These are regular three.js elements expressed in JSX.
  return (
    <animated.mesh
    ref={meshRef}      
      {...props}
	  {...spring}
    > 
       <primitive object={gltf.scene} />
  		<meshStandardMaterial color='red'/>   
    </animated.mesh>
  )
}

export default function ThreeTest() {
  return (
    <Canvas style={{height: 700 }}>
      {/* <color attach="background" args={['red']} /> */}
      <ambientLight intensity={0.5} />      
      <spotLight position={[30, 30, 10]} angle={0.15} penumbra={1} />      
      <pointLight position={[-10, -10, -10]} />
        <Flower />
        <OrbitControls />
    </Canvas>
  )
}