import { useRef, useState, createRef, useEffect, useCallback } from 'react'
import { Canvas, useFrame, events, useThree, ThreeEvent } from '@react-three/fiber'
import { Mesh } from 'three' 
import { EventTypes, useGesture } from '@use-gesture/react'
import { MeshDistortMaterial } from '@react-three/drei'
import { useSpring } from 'react-spring'
import { animated } from '@react-spring/three'
import { Physics, Triplet, useBox, usePlane, usePointToPointConstraint, useSphere } from "@react-three/cannon"

const cursor = createRef<Mesh>()

function Box (props) {
  // This reference gives us direct access to the THREE.Mesh object.
  const [ref, api] = useSphere(() => ({ mass: 1 }))
  const [, , constraint] = usePointToPointConstraint(cursor, ref, { pivotA: [0, 0, 0], pivotB: [0, 2, 0] })
  useEffect(() => void constraint.disable(), [])
  console.log(ref)
  // Hold state for hovered and clicked events.
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width
  const [spring, set] = useSpring(() => ({ scale: [1, 1, 1], position: [0, 0, 0], rotation: [0, 0, 0], config: { friction: 10 } }))
  const bind = useGesture({
    // onDrag: ({ event, offset: [x, y] }) => {api.position.set(x / aspect, -y / aspect, 0)
// console.log('dragging');},
    onDrag: ({first, last}) => {if (first) constraint.enable(); if (last) constraint.disable()},
    onHover: ({ hovering }) => set({ scale: hovering ? [.8, .8, .8] : [1, 1, 1] }),
    // onPointerDown: (e) => {e.event.stopPropagation(), constraint.enable()},
    // onPointerUp: () => {constraint.disable()},
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
  const [ref, api] = useSphere(() => ({ args: [0.1], position: [0, 0, 10000], type: 'Static' }), cursor)

  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width
  useFrame(({ mouse, viewport: { height, width } }) => {
    const x = mouse.x * width
    const y = (mouse.y * height)
    api.position.set(x / 1.4, y, 0)
  })

  return (
    <mesh ref={ref}>
      {/* <sphereBufferGeometry args={[0.5, 32, 32]} /> */}
      <meshBasicMaterial fog={false} depthTest={false} transparent opacity={0.5} />
    </mesh>
  )
}

function Plane(props) {
	const [ref] = usePlane(() => ({...props }))
	return (
	  <mesh ref={ref}>
		<planeGeometry args={[1000,1000]} />
	  </mesh>
	)
  }

    function Walls(props) {
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
// function CameraRig() {
// 	useFrame((state, delta) => {
// 	  easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
// 	  state.camera.lookAt(0, 0, 0)
// 	})


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