import { useEffect, useRef} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function ModelPractice1 (props: any) {
  const gltf = useLoader(GLTFLoader, '/testVroid.vrm');
  const meshRef = useRef<any>({});

  useEffect(()=> {
    console.log(gltf.userData.gltfExtensions.VRM);
    console.log(meshRef.current)
    gltf.scene.castShadow = true;
    gltf.scene.receiveShadow = true;
  //  console.log( gltf.parser.getDependencies( 'material' ));
  console.log(gltf);
   for (let child of gltf.scene.children){
     child.castShadow= true;
     child.receiveShadow=true;
   }
   gltf.scene.traverse((child: any)=> {
    if (child.isMesh) {

      child.castShadow = true;

      child.receiveShadow = true;

  }
   })
   //meshRef.current.scene.add(gltf.userData.gltfExtensions.VRM.scene)
  },[])

  return (
    <mesh  castShadow
    {...props}
    ref={meshRef}      
    scale={[5, 5, 5]} 
    position={[0, -5, 0]} 
    rotation={[0, 3, 0]}
    receiveShadow
    > 
       <primitive object={gltf.scene}/>
       <meshStandardMaterial />
    </mesh>
  )
}

export default function ModelPractice() {

  return (
    <Canvas style={{height: 1000 }} shadows>
      <color attach="background" args={['lightgrey']} />
      <ambientLight color="red" intensity={10}></ambientLight>
      <spotLight color="purple" intensity={100} position={[0, 0, 5]} />
      <Environment preset="sunset"></Environment>
      <ModelPractice1/>
      <OrbitControls />
    </Canvas>
  )
}