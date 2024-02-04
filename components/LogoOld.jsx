"use client";
import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useAnimations, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";

function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/logo.gltf");
  const { actions } = useAnimations(animations, group);
  const tl = gsap.timeline();
  const top = useRef();
  const bottom = useRef();

  useLayoutEffect(() => {
    tl.to(
      group.current.scale,
      {
        duration: 2,
        x: 2,
        y: 2,
        z: 2,
      },
      0,
    )
      .to(
        group.current.position,
        {
          duration: 2,
          x: -1.5,
          y: -1,
          z: 3,
        },
        0,
      )
      // .to(top.current.position, {
      //   duration: 2,
      //   // y: 1,
      // })
      .to(
        top.current.rotation,
        {
          duration: 2,
          x: -Math.PI / 2,
        },
        2,
      )
      .to(
        bottom.current.rotation,
        {
          duration: 2,
          x: Math.PI / 2,
        },
        2,
      );
  }, []);
  return (
    <group ref={group} {...props} dispose={null} rotation={[Math.PI / 2, 0, 0]}>
      <group name="Scene">
        <mesh
          ref={bottom}
          name="top"
          geometry={nodes.top.geometry}
          material={materials.silver}
        />
        <mesh
          ref={top}
          name="path372"
          geometry={nodes.path372.geometry}
          material={materials["SVGMat.297"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/logo.gltf");
export const Logo = ({ open }) => {
  return (
    <Canvas
      className={`absolute top-0 left-0 w-screen ${open ? "block" : "hidden"
        } h-screen z-50 pointer-events-none`}
    >
      <Environment preset="city" />
      <ambientLight intensity={4} />
      <Model position={[-0.7, 2.8, 0]} />
    </Canvas>
  );
};
