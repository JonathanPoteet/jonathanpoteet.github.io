import { useMemo, Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { useSpring } from 'react-spring'
import { animated } from '@react-spring/three'
import { OrbitControls, Environment } from '@react-three/drei'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function Flower (props: any) {
  const gltf = useLoader(GLTFLoader, '/flower.gltf')
  const scene = useMemo(() => gltf.scene.clone(), [gltf.scene])

  const [spring, set] = useSpring(() => ({ scale: [1, 1, 1], position: [0, 0, 0], rotation: [1.7, -.2, -.2], config: { friction: 10 } }))

  return (
    <animated.group
      {...props}
	  {...spring}
    >
       <primitive object={scene} />
    </animated.group>
  )
}

export default function ThreeTest() {
  return (
    <Canvas style={{height: 700 }}>
      {/* <color attach="background" args={['red']} /> */}
      <ambientLight intensity={0.5} />      
      <spotLight position={[30, 30, 10]} angle={0.15} penumbra={1} />      
      <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <Flower />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls />
    </Canvas>
  )
}