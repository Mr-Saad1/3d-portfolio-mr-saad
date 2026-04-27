import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0005
      meshRef.current.rotation.y += 0.001
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0001
      particlesRef.current.rotation.y += 0.0002
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[-10, -10, 5]} intensity={0.8} color="#06b6d4" />

      <mesh ref={meshRef}>
        <icosahedronGeometry args={[3, 6]} />
        <meshPhongMaterial
          color="#3b82f6"
          wireframe={true}
          emissive="#1e40af"
          emissiveIntensity={0.3}
        />
      </mesh>

      <Points ref={particlesRef} />
    </>
  )
}

function Points({ ref }: any) {
  const points = useRef<THREE.Points>(null)

  useEffect(() => {
    if (!points.current) return

    const geometry = new THREE.BufferGeometry()
    const count = 500
    const positionArray = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i += 3) {
      positionArray[i] = (Math.random() - 0.5) * 20
      positionArray[i + 1] = (Math.random() - 0.5) * 20
      positionArray[i + 2] = (Math.random() - 0.5) * 20
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))

    return () => geometry.dispose()
  }, [])

  return (
    <points ref={points}>
      <bufferGeometry />
      <pointsMaterial size={0.1} color="#06b6d4" sizeAttenuation={true} />
    </points>
  )
}