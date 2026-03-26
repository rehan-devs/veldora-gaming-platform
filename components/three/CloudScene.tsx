'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Cloud, Stars, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function FloatingIsland() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Island base */}
        <mesh position={[0, 0, 0]}>
          <coneGeometry args={[2, 1.5, 32]} />
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </mesh>
        
        {/* Island top (grass) */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[2, 2, 0.5, 32]} />
          <meshStandardMaterial color="#98D8AA" roughness={0.6} />
        </mesh>
        
        {/* Castle */}
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[1, 2, 1]} />
          <meshStandardMaterial color="#F5F5DC" roughness={0.5} />
        </mesh>
        
        {/* Castle tower */}
        <mesh position={[0, 3, 0]}>
          <coneGeometry args={[0.7, 1, 8]} />
          <meshStandardMaterial color="#FF8B94" roughness={0.5} />
        </mesh>

        {/* Castle flag */}
        <mesh position={[0.4, 3.2, 0]}>
          <planeGeometry args={[0.5, 0.3]} />
          <meshStandardMaterial color="#FFD93D" side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  )
}

function CloudCluster({ position }: { position: [number, number, number] }) {
  const cloudRef = useRef<THREE.Group>(null)

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group position={position}>
        <Cloud
          ref={cloudRef}
          opacity={0.8}
          speed={0.1}
          bounds={[5, 1, 1]}
          segments={20}
        />
      </group>
    </Float>
  )
}

function SpinningCoin({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 2
    }
  })

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
        <meshStandardMaterial 
          color="#FFD93D" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#FFD93D"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

function AnimatedStars() {
  const starsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
    }
  })

  return (
    <group ref={starsRef}>
      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  )
}

function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#FFD93D" />
      <pointLight position={[-10, 10, -5]} intensity={0.5} color="#87CEEB" />

      {/* Main floating island */}
      <FloatingIsland />

      {/* Cloud clusters */}
      <CloudCluster position={[-5, 2, -3]} />
      <CloudCluster position={[5, 1, -4]} />
      <CloudCluster position={[0, -2, -5]} />
      <CloudCluster position={[-4, -1, -2]} />
      <CloudCluster position={[4, 3, -6]} />

      {/* Spinning coins */}
      <SpinningCoin position={[-3, 1, 0]} />
      <SpinningCoin position={[3, 2, -1]} />
      <SpinningCoin position={[0, 3, -2]} />

      {/* Background stars */}
      <AnimatedStars />
    </>
  )
}

export default function CloudScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}