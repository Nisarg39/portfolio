import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, PresentationControls, useGLTF, useAnimations, Stage, Float } from '@react-three/drei';
import * as THREE from 'three';

const BaymaxModel = (props) => {
    const group = useRef();
    const { scene, animations } = useGLTF('/baymax.glb');
    const { actions } = useAnimations(animations, scene);

    if (!scene) return null;

    useMemo(() => {
        if (!scene) return;
        // Ensure the scene background is transparent/null
        scene.background = null;

        // Enhance materials and check for invalid data
        scene.traverse((obj) => {
            if (obj.isMesh) {
                obj.castShadow = true;
                obj.receiveShadow = true;

                // Check for NaN positions which cause Three.js errors
                const position = obj.geometry.getAttribute('position');
                if (position) {
                    let hasNaN = false;
                    for (let i = 0; i < position.count; i++) {
                        if (isNaN(position.getX(i)) || isNaN(position.getY(i)) || isNaN(position.getZ(i))) {
                            position.setXYZ(i, 0, 0, 0);
                            hasNaN = true;
                        }
                    }
                    if (hasNaN) {
                        position.needsUpdate = true;
                        obj.geometry.computeBoundingSphere();
                        obj.geometry.computeBoundingBox();
                    }
                }
            }
        });
    }, [scene]);

    useEffect(() => {
        if (actions && Object.keys(actions).length > 0) {
            const action = actions[Object.keys(actions)[0]];
            action.reset().fadeIn(0.5).play();
        }
    }, [actions]);

    useFrame((state) => {
        const { clock, mouse } = state;
        const time = clock.getElapsedTime();

        if (group.current) {
            // 1. Smooth Floating Position (Breathing/Hovering)
            // Floating up and down slowly
            group.current.position.y = Math.sin(time * 0.5) * 0.1;

            // 2. Responsive Mouse Follow (Tilt & Rotation)
            // Target rotation based on mouse position
            const targetRotationY = 2.25 + (mouse.x * Math.PI) / 6;
            const targetRotationX = (mouse.y * Math.PI) / 12;

            // Lerp rotations for "Premium" smoothness
            group.current.rotation.y = THREE.MathUtils.lerp(
                group.current.rotation.y,
                targetRotationY,
                0.05
            );
            group.current.rotation.x = THREE.MathUtils.lerp(
                group.current.rotation.x,
                targetRotationX,
                0.05
            );

            // 3. Subtle Side-to-Side Sway
            group.current.rotation.z = Math.sin(time * 0.3) * 0.02;
        }

        // 4. Interactive Lighting
        // Spot light or Point light follow
        const light = group.current?.parent?.getObjectByName('mouseLight');
        if (light) {
            light.position.x = THREE.MathUtils.lerp(light.position.x, mouse.x * 3, 0.1);
            light.position.y = THREE.MathUtils.lerp(light.position.y, mouse.y * 3 + 2, 0.1);
        }
    });

    return (
        <group ref={group} {...props}>
            <pointLight
                name="mouseLight"
                intensity={1}
                distance={5}
                color="#915eff"
                position={[0, 2, 2]}
            />
            {/* Model scene */}
            <primitive object={scene} />
        </group>
    );
};


const Robot = () => {
    return (
        <div className="w-full h-full min-h-[450px] lg:min-h-[600px] relative">
            <Canvas
                shadows
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                camera={{ position: [0, 0, 5], fov: 50 }}
            >
                {/* Stage automatically centers and scales the model to fit */}
                <PresentationControls
                    speed={1.5}
                    global
                    zoom={0.7}
                    polar={[-0.1, Math.PI / 4]}
                >
                    <Stage environment="city" intensity={0.4} contactShadow={{ opacity: 0.5, blur: 2 }}>
                        <React.Suspense fallback={null}>
                            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                                <BaymaxModel />
                            </Float>
                        </React.Suspense>
                    </Stage>
                </PresentationControls>
            </Canvas>
        </div>
    );
};

export default Robot;
