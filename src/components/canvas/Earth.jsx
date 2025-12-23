import { Suspense, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  useMemo(() => {
    if (earth.scene) {
      earth.scene.traverse((obj) => {
        if (obj.isMesh) {
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
    }
  }, [earth.scene]);

  return (
    <primitive
      object={earth.scene}
      scale={2.2}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;