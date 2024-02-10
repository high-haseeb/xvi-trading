/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 logo.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/logo.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.bottom.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.top.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.xvi.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.trading.geometry} material={materials['Material.001']} />
    </group>
  )
}

useGLTF.preload('/logo.gltf')
