import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

interface WhiteDeerPersonaProps {
    activeSection: string;
}

const DeerModel: React.FC<{ activeSection: string }> = ({ activeSection }) => {
    const obj = useLoader(OBJLoader, '/models/Deer.obj');
    const meshRef = useRef<THREE.Group>(null);
    const materialRef = useRef<THREE.ShaderMaterial[]>([]);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime();

        // Update shader time for wave animation
        materialRef.current.forEach((mat) => {
            if (mat.uniforms?.time) {
                mat.uniforms.time.value = time;
            }
        });

        // More prominent floating animation - focus on head area
        const baseY = -7.5;
        const floatingOffset = Math.sin(time * 0.8) * 0.15;

        // Section-based positioning and rotation - left-focused with head in view
        let targetRotationY = 0;
        let targetRotationX = 0;
        let targetX = -2;
        let targetZ = 0;
        let targetY = baseY;

        switch (activeSection) {
            case 'experience':
                targetRotationY = 0.3;
                targetRotationX = -0.1;
                targetX = -2.5;
                targetZ = 0;
                targetY = baseY;
                break;
            case 'education':
                targetRotationY = -0.4;
                targetRotationX = -0.8; // Looking downward
                targetX = -2;
                targetZ = 0.5;
                targetY = baseY;
                break;
            case 'projects':
                targetRotationY = 0.5;
                targetRotationX = -0.8; // Looking downward
                targetX = -2.8;
                targetZ = -0.5;
                targetY = baseY;
                break;
            case 'about':
                targetRotationY = 0.1;
                targetRotationX = 0;
                targetX = -3.2; // Move deer to the left
                targetZ = -2.5; // Move deer backwards (away from screen)
                targetY = baseY - 0.75; // Move deer down by 10%
                break;
        }

        // Apply floating animation to Y position
        meshRef.current.position.y = targetY + floatingOffset;

        // Smooth interpolation for rotation and position
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.05);
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.05);
        meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.03);
        meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.03);
    });

    // Apply animated vaporwave holographic material to all meshes
    React.useEffect(() => {
        if (obj) {
            materialRef.current = [];
            obj.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    // Custom shader material with animated waves
                    const material = new THREE.ShaderMaterial({
                        uniforms: {
                            time: { value: 0 },
                            color: { value: new THREE.Color(0xffffff) },
                            glowColor: { value: new THREE.Color(0xaaccff) },
                        },
                        vertexShader: `
                            varying vec3 vNormal;
                            varying vec3 vPosition;

                            void main() {
                                vNormal = normalize(normalMatrix * normal);
                                vPosition = position;
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                            }
                        `,
                        fragmentShader: `
                            uniform float time;
                            uniform vec3 color;
                            uniform vec3 glowColor;

                            varying vec3 vNormal;
                            varying vec3 vPosition;

                            void main() {
                                // Vaporwave grid lines (vertical and horizontal)
                                float gridSize = 0.15;
                                float gridThickness = 0.03;

                                float gridX = abs(fract(vPosition.x / gridSize) - 0.5) * 2.0;
                                float gridY = abs(fract(vPosition.y / gridSize) - 0.5) * 2.0;
                                float gridZ = abs(fract(vPosition.z / gridSize) - 0.5) * 2.0;

                                float grid = smoothstep(1.0 - gridThickness, 1.0, max(max(gridX, gridY), gridZ));

                                // Animated scan lines moving down
                                float scanLine = sin((vPosition.y - time * 2.0) * 30.0) * 0.5 + 0.5;
                                scanLine = smoothstep(0.8, 1.0, scanLine);

                                // Animated horizontal bands
                                float bands = sin(vPosition.y * 6.0 - time * 1.5) * 0.5 + 0.5;
                                bands = smoothstep(0.6, 0.8, bands);

                                // Fresnel effect for holographic rim
                                vec3 viewDirection = normalize(cameraPosition - vPosition);
                                float fresnel = pow(1.0 - abs(dot(viewDirection, vNormal)), 2.5);

                                // Base color with grid overlay
                                vec3 finalColor = color * 0.4;

                                // Add grid lines
                                finalColor += vec3(1.0) * grid * 0.8;

                                // Add scan lines
                                finalColor += vec3(1.0) * scanLine * 0.6;

                                // Add bands
                                finalColor += color * bands * 0.3;

                                // Add fresnel glow
                                finalColor += glowColor * fresnel * 0.9;

                                // Add extra brightness on grid intersections
                                finalColor += vec3(1.0) * grid * scanLine * 0.5;

                                // Transparency based on effects
                                float alpha = fresnel * 0.7 + grid * 0.3 + scanLine * 0.2 + 0.3;

                                gl_FragColor = vec4(finalColor, alpha);
                            }
                        `,
                        transparent: true,
                        side: THREE.DoubleSide,
                        blending: THREE.AdditiveBlending,
                    });

                    child.material = material;
                    materialRef.current.push(material);
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
        }
    }, [obj]);

    return (
        <group ref={meshRef}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
                <primitive
                    object={obj}
                    scale={0.025}
                    position={[0, 0, 0]}
                />
            </Float>
        </group>
    );
};

export const WhiteDeerPersona: React.FC<WhiteDeerPersonaProps> = ({ activeSection }) => {
    return (
        <div className="w-full h-full absolute inset-0 pointer-events-none z-0" style={{ mixBlendMode: 'screen' }}>
            <Canvas gl={{ alpha: true, antialias: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />

                {/* Enhanced lighting for more dramatic effect */}
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
                <pointLight position={[-5, -3, 3]} intensity={0.8} color="#4488ff" />
                <spotLight
                    position={[0, 10, 5]}
                    angle={0.5}
                    penumbra={1}
                    intensity={2}
                    castShadow
                    color="#ffffff"
                />
                <spotLight
                    position={[0, -10, 5]}
                    angle={0.3}
                    penumbra={1}
                    intensity={1}
                    color="#6688ff"
                />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <Suspense fallback={null}>
                    <DeerModel activeSection={activeSection} />
                </Suspense>
            </Canvas>
        </div>
    );
};
