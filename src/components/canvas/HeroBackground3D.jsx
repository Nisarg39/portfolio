import { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

// Mouse position tracker
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};

// Create star texture
const createStarTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  // Clear canvas
  ctx.clearRect(0, 0, 64, 64);

  // Draw a 4-pointed star with glow
  const centerX = 32;
  const centerY = 32;

  // Create radial gradient for glow effect
  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(0.2, 'rgba(200, 180, 255, 0.6)');
  gradient.addColorStop(0.4, 'rgba(145, 94, 255, 0.3)');
  gradient.addColorStop(1, 'rgba(145, 94, 255, 0)');

  // Draw star shape
  ctx.beginPath();
  const spikes = 4;
  const outerRadius = 28;
  const innerRadius = 8;

  for (let i = 0; i < spikes * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / spikes - Math.PI / 2;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();

  ctx.fillStyle = gradient;
  ctx.fill();

  // Add center glow
  const centerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 12);
  centerGlow.addColorStop(0, 'rgba(255, 255, 255, 1)');
  centerGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
  centerGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');

  ctx.beginPath();
  ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
  ctx.fillStyle = centerGlow;
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Animated Stars with mouse reactivity
const AnimatedStars = ({ mousePosition }) => {
  const ref = useRef();
  const particleCount = 2500;

  const starTexture = useMemo(() => createStarTexture(), []);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const siz = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 10 + 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi) - 5;

      // Small to medium sizes only
      siz[i] = Math.random() * 0.015 + 0.005;
    }

    return [pos, siz];
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += (mousePosition.x * 0.15 - ref.current.rotation.y) * delta * 0.5;
    ref.current.rotation.x += (mousePosition.y * 0.1 - ref.current.rotation.x) * delta * 0.5;
    ref.current.rotation.z += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        map={starTexture}
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors={false}
        color="#ffffff"
      />
    </points>
  );
};

// Create smooth trail texture
const createTrailTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');

  // Create horizontal gradient for trail fade
  const gradient = ctx.createLinearGradient(0, 0, 256, 0);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
  gradient.addColorStop(0.1, 'rgba(180, 160, 255, 0.3)');
  gradient.addColorStop(0.3, 'rgba(200, 180, 255, 0.6)');
  gradient.addColorStop(0.6, 'rgba(220, 210, 255, 0.85)');
  gradient.addColorStop(0.85, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');

  // Add vertical fade for soft edges
  const vertGradient = ctx.createLinearGradient(0, 0, 0, 32);
  vertGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
  vertGradient.addColorStop(0.3, 'rgba(255, 255, 255, 1)');
  vertGradient.addColorStop(0.7, 'rgba(255, 255, 255, 1)');
  vertGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 32);

  // Apply vertical softness
  ctx.globalCompositeOperation = 'destination-in';
  ctx.fillStyle = vertGradient;
  ctx.fillRect(0, 0, 256, 32);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Single Meteor with smooth ribbon trail
const Meteor = ({ delay, speed, trailWidthBase, headSize }) => {
  const groupRef = useRef();
  const trailMeshRef = useRef();
  const headRef = useRef();
  const timeRef = useRef(delay);
  const activeRef = useRef(false);
  const positionHistoryRef = useRef([]);
  const nextDelayRef = useRef(delay);
  // Random travel distance for each meteor cycle
  const travelDistanceRef = useRef(0.3 + Math.random() * 0.7);
  // Random angle variation (-15 to +15 degrees from diagonal)
  const angleOffsetRef = useRef((Math.random() - 0.5) * 0.5);

  const trailSegments = 60;
  const trailWidth = trailWidthBase;

  const trailTexture = useMemo(() => createTrailTexture(), []);

  const meteorTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Bright glowing meteor head
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 250, 240, 1)');
    gradient.addColorStop(0.4, 'rgba(200, 180, 255, 0.8)');
    gradient.addColorStop(0.7, 'rgba(145, 94, 255, 0.4)');
    gradient.addColorStop(1, 'rgba(145, 94, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Create trail geometry
  const trailGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array(trailSegments * 6); // 2 triangles per segment = 6 vertices
    const uvs = new Float32Array(trailSegments * 4); // 4 UV coords per segment (2 vertices * 2)
    const colors = new Float32Array(trailSegments * 8); // RGBA for each vertex

    // Initialize UVs
    for (let i = 0; i < trailSegments; i++) {
      const t = i / (trailSegments - 1);
      uvs[i * 4] = t;
      uvs[i * 4 + 1] = 0;
      uvs[i * 4 + 2] = t;
      uvs[i * 4 + 3] = 1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));

    // Create indices for triangle strip
    const indices = [];
    for (let i = 0; i < trailSegments - 1; i++) {
      const base = i * 2;
      indices.push(base, base + 1, base + 2);
      indices.push(base + 1, base + 3, base + 2);
    }
    geometry.setIndex(indices);

    return geometry;
  }, [trailSegments]);

  // Trail material with smooth gradient
  const trailMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: trailTexture,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });
  }, [trailTexture]);

  useFrame((state, delta) => {
    timeRef.current += delta;

    // Calculate dynamic duration based on travel distance
    const currentDuration = 0.4 + travelDistanceRef.current * 1.2;

    // Use randomized duration and add random delay before next appearance
    if (timeRef.current > nextDelayRef.current + currentDuration) {
      timeRef.current = 0;
      activeRef.current = false;
      positionHistoryRef.current = [];
      // Randomize next appearance delay (4-18 seconds for more sparse appearance)
      nextDelayRef.current = 4 + Math.random() * 14;
      // Randomize travel distance for next cycle (30% to 100% of full travel)
      travelDistanceRef.current = 0.3 + Math.random() * 0.7;
      // Randomize angle for next cycle
      angleOffsetRef.current = (Math.random() - 0.5) * 0.5;
    }

    if (timeRef.current < nextDelayRef.current) {
      if (headRef.current) headRef.current.visible = false;
      if (trailMeshRef.current) trailMeshRef.current.visible = false;
      return;
    }

    if (!activeRef.current) {
      activeRef.current = true;
      positionHistoryRef.current = [];
      if (headRef.current) {
        // Start from upper portions of screen - spread across full width
        // X: -4 to 6 (full width coverage)
        // Y: 2 to 5 (upper area so they can fall down)
        const newStartX = -4 + Math.random() * 10;
        const newStartY = 2 + Math.random() * 3;
        const newStartZ = -1 - Math.random() * 2;
        headRef.current.position.set(newStartX, newStartY, newStartZ);
      }
    }

    if (headRef.current) {
      headRef.current.visible = true;

      // Move meteor diagonally DOWN-left (like real shooting stars)
      // Angle ~225° (down-left direction) with variation
      const baseAngle = Math.PI * 1.25; // 225 degrees - down and left
      const angle = baseAngle + angleOffsetRef.current;
      const moveSpeed = delta * speed * 2 * travelDistanceRef.current;
      headRef.current.position.x += Math.cos(angle) * moveSpeed;
      headRef.current.position.y += Math.sin(angle) * moveSpeed;

      // Store position history for smooth trail
      const currentPos = headRef.current.position.clone();
      positionHistoryRef.current.unshift(currentPos);

      // Limit history length
      if (positionHistoryRef.current.length > trailSegments) {
        positionHistoryRef.current.pop();
      }

      // Update trail mesh
      if (trailMeshRef.current && positionHistoryRef.current.length >= 2) {
        trailMeshRef.current.visible = true;
        const positions = trailMeshRef.current.geometry.attributes.position.array;
        const colors = trailMeshRef.current.geometry.attributes.color.array;

        // Calculate direction for width offset
        const history = positionHistoryRef.current;

        for (let i = 0; i < trailSegments; i++) {
          const historyIndex = Math.min(i, history.length - 1);
          const pos = history[historyIndex];

          // Calculate perpendicular direction for ribbon width
          let perpX = 0, perpY = 0;
          if (historyIndex < history.length - 1) {
            const nextPos = history[historyIndex + 1];
            const dirX = pos.x - nextPos.x;
            const dirY = pos.y - nextPos.y;
            const len = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
            perpX = -dirY / len;
            perpY = dirX / len;
          } else if (historyIndex > 0) {
            const prevPos = history[historyIndex - 1];
            const dirX = prevPos.x - pos.x;
            const dirY = prevPos.y - pos.y;
            const len = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
            perpX = -dirY / len;
            perpY = dirX / len;
          }

          // Taper the trail width
          const t = i / trailSegments;
          const width = trailWidth * (1 - t * 0.8);

          // Set vertex positions (two vertices per segment for ribbon)
          const baseIdx = i * 6;
          positions[baseIdx] = pos.x + perpX * width;
          positions[baseIdx + 1] = pos.y + perpY * width;
          positions[baseIdx + 2] = pos.z;
          positions[baseIdx + 3] = pos.x - perpX * width;
          positions[baseIdx + 4] = pos.y - perpY * width;
          positions[baseIdx + 5] = pos.z;

          // Set vertex colors with fade
          const alpha = Math.pow(1 - t, 1.5);
          const colorIdx = i * 8;
          // Top vertex
          colors[colorIdx] = 1;
          colors[colorIdx + 1] = 1;
          colors[colorIdx + 2] = 1;
          colors[colorIdx + 3] = alpha;
          // Bottom vertex
          colors[colorIdx + 4] = 1;
          colors[colorIdx + 5] = 1;
          colors[colorIdx + 6] = 1;
          colors[colorIdx + 7] = alpha;
        }

        trailMeshRef.current.geometry.attributes.position.needsUpdate = true;
        trailMeshRef.current.geometry.attributes.color.needsUpdate = true;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Meteor head with glow */}
      <sprite ref={headRef} visible={false} scale={[headSize, headSize, 1]}>
        <spriteMaterial
          map={meteorTexture}
          transparent
          opacity={1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </sprite>

      {/* Smooth ribbon trail */}
      <mesh ref={trailMeshRef} visible={false} geometry={trailGeometry} material={trailMaterial} />
    </group>
  );
};

// Meteors container
const Meteors = () => {
  const meteors = useMemo(() => {
    const items = [];
    const meteorCount = 5;

    for (let i = 0; i < meteorCount; i++) {
      items.push({
        id: i,
        // Stagger initial delays much more (0-20 seconds)
        delay: Math.random() * 20,
        // Vary speed more significantly
        speed: 2.5 + Math.random() * 3.5,
        // Randomize trail width
        trailWidthBase: 0.006 + Math.random() * 0.012,
        // Randomize head size
        headSize: 0.05 + Math.random() * 0.07,
      });
    }

    return items;
  }, []);

  return (
    <group>
      {meteors.map((meteor) => (
        <Meteor
          key={meteor.id}
          delay={meteor.delay}
          speed={meteor.speed}
          trailWidthBase={meteor.trailWidthBase}
          headSize={meteor.headSize}
        />
      ))}
    </group>
  );
};

// Main scene component
const Scene = ({ mousePosition }) => {
  return (
    <>
      <AnimatedStars mousePosition={mousePosition} />
      <Meteors />
    </>
  );
};

// Main canvas component
const HeroBackground3D = () => {
  const mousePosition = useMousePosition();

  return (
    <div className="hero-3d-background">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <Suspense fallback={null}>
          <Scene mousePosition={mousePosition} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroBackground3D;
