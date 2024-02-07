"use client"
import React, { useRef, useLayoutEffect, useEffect } from 'react'
import { useGLTF, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three'
import { useRouter } from 'next/navigation';


export const Logo = ({ open }) => {
  return (
     <Canvas className={`absolute top-0 left-0 w-screen ${open ? "z-50" : "z-0"} h-screen  pointer-events-none`}>
      <Environment preset="city" />
      <ambientLight intensity={1}/>
      
      <Model position={[0, 2, 0]} rotation={[Math.PI / 2, 0, 0]} scale={10} open={open} />
    </Canvas>
  );
};
export function Model({open, ...props }) {
  const { nodes, materials } = useGLTF('/logo.gltf')
  const group = useRef();
  const router = useRouter();
  console.log(materials)

  const tl = gsap.timeline();
  const top = useRef();
  const bottom = useRef();
  const logoRef = useRef();

  useEffect(() => {
    if(open){
      tl.to(group.current.scale,    {duration: 2, x: 5,y: 5,z: 5},0)
        .to(group.current.position, {duration: 2, x: 0,y: 0,z: 3},0)
        .to(top.current.rotation,   {duration: 2, x: -Math.PI/2 },2)
        .to(top.current.position,   {duration: 2, y: 1.5, z: -0.1 },2)
        .to(bottom.current.rotation,{duration: 2, x: Math.PI/2  },2)
        .to(bottom.current.position,{duration: 2, y: 1}, 2)
        .to(logoRef.current.position,{duration: 2, y: 2, onComplete: () => router.push('/about')},2);
    }
  }, [open]);
  const gold = new THREE.MeshPhysicalMaterial({color: '#F3C749', metalness: 0.8, roughness: 0.2})
  const silver = new THREE.MeshPhysicalMaterial({color: '#9A9A9A', metalness: 0.9, roughness: 0.2})
  return (
    <group {...props} dispose={null} ref={group}>
      <mesh geometry={nodes.top.geometry} ref={top} material={gold} position={[-0.25, -0.034, 0.115]} />
      <mesh geometry={nodes.bottom.geometry} ref={bottom} material={silver} position={[-0.25, -0.034, 0.115]} />
      <pointLight intensity={6}/>
      <group ref={logoRef}>
        <mesh geometry={nodes.xvi.geometry} material={silver} position={[-0.25, -0.034, 0.115]} />
        <mesh geometry={nodes.trading.geometry} material={gold} position={[-0.25, -0.034, 0.115]} />
      </group>
    </group>
  )
}

useGLTF.preload('/logo.gltf')
