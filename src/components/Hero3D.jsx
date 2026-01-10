import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Animated floating particles
function Particles({ count = 100 }) {
    const mesh = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 20;
            const scale = Math.random() * 0.5 + 0.1;
            temp.push({ x, y, z, scale });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        particles.forEach((particle, i) => {
            const t = state.clock.elapsedTime;
            dummy.position.set(
                particle.x + Math.sin(t * 0.5 + i) * 0.5,
                particle.y + Math.cos(t * 0.3 + i) * 0.5,
                particle.z + Math.sin(t * 0.2 + i) * 0.5
            );
            dummy.scale.setScalar(particle.scale);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#10b981" transparent opacity={0.6} />
        </instancedMesh>
    );
}

// Animated blob shape
function AnimatedBlob() {
    const mesh = useRef();

    useFrame((state) => {
        mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
        mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={mesh} args={[1.5, 64, 64]} position={[2, 0, -2]}>
                <MeshDistortMaterial
                    color="#10b981"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    transparent
                    opacity={0.8}
                />
            </Sphere>
        </Float>
    );
}

// Secondary blob
function SecondaryBlob() {
    const mesh = useRef();

    useFrame((state) => {
        mesh.current.rotation.x = -state.clock.elapsedTime * 0.15;
        mesh.current.rotation.y = -state.clock.elapsedTime * 0.25;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
            <Sphere ref={mesh} args={[1, 32, 32]} position={[-2.5, 1, -3]}>
                <MeshDistortMaterial
                    color="#059669"
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                    roughness={0.3}
                    transparent
                    opacity={0.6}
                />
            </Sphere>
        </Float>
    );
}

// Main Hero3D component
const Hero3D = ({ className = '' }) => {
    return (
        <div className={`absolute inset-0 -z-10 ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                style={{ background: 'transparent' }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />

                <Particles count={80} />
                <AnimatedBlob />
                <SecondaryBlob />
            </Canvas>
        </div>
    );
};

export default Hero3D;
