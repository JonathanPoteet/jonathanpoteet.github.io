import { useRef, useState, createRef, useEffect, useCallback } from 'react'
import { Canvas, useFrame, events, useThree, ThreeEvent } from '@react-three/fiber'
import { Mesh } from 'three' 
import { EventTypes, useGesture } from '@use-gesture/react'
import { MeshDistortMaterial } from '@react-three/drei'
import { useSpring } from 'react-spring'
import { animated } from '@react-spring/three'
import { Physics, PlaneProps, Triplet, useBox, usePlane, usePointToPointConstraint, useSphere } from "@react-three/cannon"
import { BufferGeometry } from 'three/src/Three.js'

const cursor = createRef<Mesh>()

function Box (props: any) {
  // This reference gives us direct access to the THREE.Mesh object.
  const [ref, api] = useSphere(() => ({ mass: 1 }))
  const [, , constraint] = usePointToPointConstraint(cursor, ref, { pivotA: [0, 0, 0], pivotB: [0, 2, 0] })
  useEffect(() => void constraint.disable(), [])
  console.log(ref)
  // Hold state for hovered and clicked events.
  const [spring, set] = useSpring(() => ({ scale: [1, 1, 1], position: [0, 0, 0], rotation: [0, 0, 0], config: { friction: 10 } }))
  const bind = useGesture({
    onDrag: ({first, last}) => {if (first) constraint.enable(); if (last) constraint.disable();},
    onHover: ({ hovering }) => set({ scale: hovering ? [.8, .8, .8] : [1, 1, 1] }),
  })

  // Subscribe this component to the render-loop and rotate the mesh every frame.
  useFrame((state,delta) => {
	
})

  // Return the view.
  // These are regular three.js elements expressed in JSX.
  return (
    <animated.mesh      
      {...props}
	  {...spring} {...bind()}
      ref={ref}
    > 
       <sphereGeometry  />
  		<meshStandardMaterial color='cyan'/>   
    </animated.mesh>
  )
}
const Cursor = () => {
  const [ref, api] = useSphere(() => ({ args: [0.1], position: [0, 0, 0], type: 'Static' }), cursor)
  api.scaleOverride([.5, .5, .5])

  useFrame(({mouse, viewport: { height, width } }) => {
    const x = mouse.x*width;
    const y = mouse.y*height;
    api.position.set(x/2, y/2, 0)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry/>
      <meshStandardMaterial />
    </mesh>
  )
}

function Plane(props: PlaneProps) {
	const [ref] = usePlane(() => ({...props }))
	return (
	  <mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>}>
		<planeGeometry args={[1000,1000]} />
	  </mesh>
	)
  }

    function Walls() {
      const { viewport } = useThree()
      return (
        <>
        <Plane position={[0, -viewport.height / 2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <Plane position={[-viewport.width / 2 - 1, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        <Plane position={[viewport.width / 2 + 1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
        {/* <Plane position={[0, 0, -1]} rotation={[0, 0, 0]} /> */}
        <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
        </>
      )
    }

export default function ThreeTest() {
  return (
    <Canvas orthographic camera={{zoom: 100, position: [0,0,100]}} style={{height: 900 }}>
      {/* <color attach="background" args={['red']} /> */}
      <ambientLight intensity={0.5} />      
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />      
      <pointLight position={[-10, -10, -10]} />
	    <Physics gravity={[0, -50, 0]}>
        <Cursor />
        <Walls />
        <Box />
	    </Physics>    
    </Canvas>
  )
}