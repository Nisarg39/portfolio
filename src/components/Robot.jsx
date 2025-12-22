import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, PresentationControls, useGLTF, useAnimations, Stage } from '@react-three/drei';
import * as THREE from 'three';

const BaymaxModel = (props) => {
    const group = useRef();
    const { scene, animations } = useGLTF('/baymax.glb');
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        // Ensure the scene background is transparent/null
        scene.background = null;

        // Enhance materials
        scene.traverse((obj) => {
            if (obj.isMesh) {
                obj.castShadow = true;
                obj.receiveShadow = true;
                // If the model looks gray, it might need material tuning
                // obj.material.roughness = 0.5;
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
        // Rotating the scene slightly based on mouse
        if (group.current) {
            // Adjusted base rotation to 2.25 radians
            const targetRotation = 2.25 + (state.mouse.x * Math.PI) / 8;
            group.current.rotation.y = THREE.MathUtils.lerp(
                group.current.rotation.y,
                targetRotation,
                0.05
            );
        }
    });

    return (
        <group ref={group} {...props}>
            {/* Model scene */}
            <primitive object={scene} />
        </group>
    );
};

useGLTF.preload('/baymax.glb');

const Robot = () => {
    return (
        <div className="w-full h-full min-h-[400px] lg:min-h-[600px] relative">
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
                    <Stage environment="city" intensity={0.6} contactShadow={{ opacity: 0.5, blur: 2 }}>
                        <BaymaxModel />
                    </Stage>
                </PresentationControls>
            </Canvas>
        </div>
    );
};

export default Robot;
