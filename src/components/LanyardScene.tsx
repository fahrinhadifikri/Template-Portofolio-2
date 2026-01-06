import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import {
  RigidBody,
  BallCollider,
  CuboidCollider,
  useRopeJoint,
  useSphericalJoint,
} from '@react-three/rapier'

import cardGLB from '../assets/models/card.glb'

export default function LanyardScene() {
  const fixed = useRef<any>(null)
  const joint1 = useRef<any>(null)
  const joint2 = useRef<any>(null)
  const card = useRef<any>(null)

  const { scene } = useGLTF(cardGLB)

  /* rope visual points */
  const ropeSegments = 12
  const rope = useMemo(
    () =>
      [...Array(ropeSegments)].map(
        (_, i) => new THREE.Vector3(0, -i * 0.12, 0)
      ),
    []
  )

  /* joints */
  useSphericalJoint(fixed, joint1, [[0, 0, 0], [0, 0, 0]])
  useSphericalJoint(joint1, joint2, [[0, 0, 0], [0, 0, 0]])
  useRopeJoint(joint2, card, [[0, 0, 0], [0, 0.6, 0], 1])

  /* update rope visual */
  useFrame(() => {
    if (!joint1.current || !joint2.current || !card.current) return

    rope[0].copy(joint1.current.translation())
    rope[rope.length - 1].copy(card.current.translation())
  })

  return (
    <>
      {/* fixed anchor */}
      <RigidBody type="fixed" ref={fixed}>
        <BallCollider args={[0.05]} />
      </RigidBody>

      {/* rope joints */}
      <RigidBody ref={joint1} colliders={false}>
        <BallCollider args={[0.05]} />
      </RigidBody>

      <RigidBody ref={joint2} colliders={false}>
        <BallCollider args={[0.05]} />
      </RigidBody>

      {/* rope visual */}
      {rope.map((p, i) => (
        <mesh key={i} position={p}>
          <cylinderGeometry args={[0.01, 0.01, 0.12]} />
          <meshStandardMaterial color="#999" />
        </mesh>
      ))}

      {/* card */}
      <RigidBody
        ref={card}
        angularDamping={4}
        linearDamping={1.5}
        colliders={false}
        position={[0, -2, 0]}
      >
        <CuboidCollider args={[0.8, 1.1, 0.05]} />
        <primitive object={scene} scale={1.4} />
      </RigidBody>
    </>
  )
}
