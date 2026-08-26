import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useDrag } from '@use-gesture/react'
import { Physics, RigidBody, BallCollider, CuboidCollider } from "@react-three/rapier"

function Box ({ cursorRef }: { cursorRef: React.RefObject<any> }) {
  const ref = useRef<any>(null)
  const [isConstraining, setIsConstraining] = useState(false)
  const prevOffsetRef = useRef({ x: 0, y: 0 })
  
  const bind = useDrag(({ first, last, offset: [ox, oy], movement: [mx, my], velocity: [vx, vy] }) => {
    if (first) {
      setIsConstraining(true)
      prevOffsetRef.current = { x: ox, y: oy }
    }
    
    if (last) {
      setIsConstraining(false)
      // Use the velocity from gesture directly (already calculated per frame)
      const velX = vx * 2
      const velY = vy * 2
      
      // Apply velocity when releasing
      if (ref.current) {
        console.log('Releasing with velocity:', velX, velY)
        ref.current.setLinvel({ x: velX, y: velY, z: 0 }, true)
      }
    }
    
    if (isConstraining && ref.current && cursorRef.current) {
      // Follow the cursor position
      const cursorPos = cursorRef.current.translation()
      ref.current.setTranslation({
        x: cursorPos.x,
        y: cursorPos.y - 1, // Offset from cursor
        z: cursorPos.z
      }, true)
    }
  })

  return (
    <RigidBody ref={ref} mass={1}>
      <mesh {...bind()}>
        <sphereGeometry />
        <meshStandardMaterial color='cyan' />
      </mesh>
      <BallCollider args={[1]} />
    </RigidBody>
  )
}
const Cursor = ({ ref }: { ref: React.RefObject<any> }) => {
  useFrame((state) => {
    // pointer.x and pointer.y are normalized -1 to 1
    const { pointer, viewport } = state
    if (!ref.current) return
    const x = (pointer.x * viewport.width) / 2
    const y = (pointer.y * viewport.height) / 2
    ref.current.setTranslation({ x, y, z: 0 }, true)
  })

  return (
    <RigidBody ref={ref} type="kinematicPosition" position={[0, 0, 0]}>
      <mesh scale={[0.2, 0.2, 0.2]}>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
      <BallCollider args={[0.1]} />
    </RigidBody>
  )
}

function Plane(props: any) {
  return (
    <RigidBody type="fixed" {...props}>
      <mesh>
        <planeGeometry args={[1000, 1000]} />
      </mesh>
      <CuboidCollider args={[500, 500, 0.1]} />
    </RigidBody>
  )
}

function Walls() {
  const { viewport } = useThree()
  return (
    <>
      {/* Bottom wall */}
      <Plane position={[0, -viewport.height / 2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      
      {/* Top wall */}
      <Plane position={[0, viewport.height / 2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      
      {/* Left wall */}
      <Plane position={[-viewport.width / 2 - 1, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      
      {/* Right wall */}
      <Plane position={[viewport.width / 2 + 1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
      
      {/* Back wall */}
      <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
    </>
  )
}

export default function ThreeTest() {
  const cursorRef = useRef<any>(null)

  return (
    <Canvas
      orthographic
      camera={{ zoom: 100, position: [0, 0, 100] }}
      style={{ height: 900, touchAction: 'none' }}
    >
      <ambientLight intensity={0.5} />
      <Physics gravity={[0, -10, 0]}>
        <Cursor ref={cursorRef} />
        <Walls />
        <Box cursorRef={cursorRef} />
      </Physics>
    </Canvas>
  )
}