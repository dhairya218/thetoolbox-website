
'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useRouter } from 'next/navigation';

function RotatingGlobe({ rotationRef }: { rotationRef: React.MutableRefObject<THREE.Euler> }) {
  const meshRef = useRef<THREE.Group>(null);
  const targetRotation = rotationRef;
  
  // Multiple interconnected gears for industrial look
  const geometry1 = useMemo(() => new THREE.CylinderGeometry(1.8, 1.8, 0.3, 16), []);
  const geometry2 = useMemo(() => new THREE.CylinderGeometry(1.2, 1.2, 0.2, 12), []);
  const geometry3 = useMemo(() => new THREE.CylinderGeometry(0.8, 0.8, 0.15, 8), []);
  
  const material1 = useMemo(
    () => new THREE.MeshStandardMaterial({ 
      color: new THREE.Color('#f0851e'), 
      metalness: 0.9, 
      roughness: 0.1,
      emissive: new THREE.Color('#D76714'),
      emissiveIntensity: 0.8
    }),
    []
  );
  
  const material2 = useMemo(
    () => new THREE.MeshStandardMaterial({ 
      color: new THREE.Color('#D76714'), 
      metalness: 0.8, 
      roughness: 0.2,
      emissive: new THREE.Color('#f0851e'),
      emissiveIntensity: 0.6
    }),
    []
  );
  
  const material3 = useMemo(
    () => new THREE.MeshStandardMaterial({ 
      color: new THREE.Color('#ffffff'), 
      metalness: 0.7, 
      roughness: 0.3,
      emissive: new THREE.Color('#f0851e'),
      emissiveIntensity: 0.4
    }),
    []
  );

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smooth rotation toward target
      meshRef.current.rotation.x += (targetRotation.current.x - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetRotation.current.y - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.z += (targetRotation.current.z - meshRef.current.rotation.z) * 0.05;
      
      // Continuous rotation for video-like effect
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  const onPointerDown = (e: any) => {
    e.stopPropagation();
    if (meshRef.current) {
      // Calculate rotation based on click position
      const x = (e.uv.x - 0.5) * 2; // -1 to 1
      const y = (e.uv.y - 0.5) * 2; // -1 to 1
      targetRotation.current.set(y * Math.PI, x * Math.PI, 0);
    }
  };

  return (
    <group ref={meshRef} onPointerDown={onPointerDown}>
      <mesh geometry={geometry1} material={material1} />
      <mesh geometry={geometry2} material={material2} position={[0, 0, 0.3]} rotation={[0, 0, Math.PI/4]} />
      <mesh geometry={geometry3} material={material3} position={[0, 0, -0.3]} rotation={[0, 0, -Math.PI/4]} />
    </group>
  );
}

function ProductModels({ rotationRef }: { rotationRef: React.MutableRefObject<THREE.Euler> }) {
  const products = [
    // Wrenches and hand tools
    { pos: new THREE.Vector3(-6, 4, -5), type: 'wrench', scale: 1.2 },
    { pos: new THREE.Vector3(-4, 2, -6), type: 'wrench', scale: 0.8 },
    { pos: new THREE.Vector3(5, 3, -4), type: 'hammer', scale: 1.0 },
    { pos: new THREE.Vector3(6, 1, -5), type: 'hammer', scale: 0.7 },
    
    // Power tools
    { pos: new THREE.Vector3(-3, -2, 4), type: 'drill', scale: 1.1 },
    { pos: new THREE.Vector3(-5, -1, 3), type: 'drill', scale: 0.9 },
    { pos: new THREE.Vector3(4, -2, 3), type: 'welder', scale: 1.0 },
    { pos: new THREE.Vector3(2, -3, 2), type: 'welder', scale: 0.8 },
    
    // Gears and mechanical
    { pos: new THREE.Vector3(5, -1, 2), type: 'gear', scale: 0.8 },
    { pos: new THREE.Vector3(3, 2, 4), type: 'gear', scale: 1.1 },
    { pos: new THREE.Vector3(-4, 1, 4), type: 'bearing', scale: 0.7 },
    { pos: new THREE.Vector3(-2, 3, 3), type: 'bearing', scale: 0.9 },
    
    // Generators and electrical
    { pos: new THREE.Vector3(-2, -3, -2), type: 'generator', scale: 1.3 },
    { pos: new THREE.Vector3(1, -4, -3), type: 'generator', scale: 1.0 },
    { pos: new THREE.Vector3(2, -2, -4), type: 'electrical', scale: 1.0 },
    { pos: new THREE.Vector3(-1, -1, -5), type: 'electrical', scale: 0.8 },
    
    // Screwdrivers and precision tools
    { pos: new THREE.Vector3(-4, 1, 4), type: 'screwdriver', scale: 0.9 },
    { pos: new THREE.Vector3(3, 3, 3), type: 'screwdriver', scale: 0.6 },
    { pos: new THREE.Vector3(-1, 4, 2), type: 'precision', scale: 0.7 },
    { pos: new THREE.Vector3(4, 4, 1), type: 'precision', scale: 0.8 },
    
    // Safety equipment
    { pos: new THREE.Vector3(-3, 5, -2), type: 'helmet', scale: 1.0 },
    { pos: new THREE.Vector3(2, 5, -1), type: 'helmet', scale: 0.8 },
    { pos: new THREE.Vector3(-5, -4, 1), type: 'safety', scale: 0.9 },
    { pos: new THREE.Vector3(1, -5, 0), type: 'safety', scale: 0.7 },
    
    // Construction equipment
    { pos: new THREE.Vector3(6, 0, 1), type: 'construction', scale: 1.2 },
    { pos: new THREE.Vector3(-6, -1, 0), type: 'construction', scale: 1.0 },
    { pos: new THREE.Vector3(0, 6, -1), type: 'lifting', scale: 1.1 },
    { pos: new THREE.Vector3(0, -6, 1), type: 'lifting', scale: 0.9 },
  ];

  return (
    <group>
      {products.map((product, index) => (
        <ProductModel
          key={index}
          position={product.pos}
          type={product.type}
          scale={product.scale}
          rotationRef={rotationRef}
        />
      ))}
    </group>
  );
}

function ProductModel({ 
  position, 
  type, 
  scale, 
  rotationRef 
}: { 
  position: THREE.Vector3; 
  type: string; 
  scale: number;
  rotationRef: React.MutableRefObject<THREE.Euler>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const material = useMemo(() => 
    new THREE.MeshStandardMaterial({ 
      color: '#f0851e', 
      metalness: 0.9, 
      roughness: 0.1,
      emissive: '#D76714',
      emissiveIntensity: 0.6
    }), []
  );

  const createGeometry = (type: string) => {
    switch (type) {
      case 'wrench':
        return new THREE.BoxGeometry(0.4, 0.1, 0.1);
      case 'hammer':
        return new THREE.CylinderGeometry(0.08, 0.12, 1.0, 8);
      case 'drill':
        return new THREE.CylinderGeometry(0.12, 0.18, 0.8, 8);
      case 'gear':
        return new THREE.CylinderGeometry(0.25, 0.25, 0.15, 16);
      case 'screwdriver':
        return new THREE.CylinderGeometry(0.03, 0.06, 0.5, 6);
      case 'bearing':
        return new THREE.TorusGeometry(0.3, 0.08, 8, 16);
      case 'generator':
        return new THREE.BoxGeometry(0.6, 0.4, 0.3);
      case 'welder':
        return new THREE.CylinderGeometry(0.15, 0.2, 0.4, 8);
      case 'electrical':
        return new THREE.BoxGeometry(0.3, 0.2, 0.1);
      case 'precision':
        return new THREE.ConeGeometry(0.1, 0.3, 6);
      case 'helmet':
        return new THREE.SphereGeometry(0.3, 16, 16);
      case 'safety':
        return new THREE.BoxGeometry(0.2, 0.3, 0.1);
      case 'construction':
        return new THREE.BoxGeometry(0.5, 0.3, 0.4);
      case 'lifting':
        return new THREE.CylinderGeometry(0.1, 0.15, 0.6, 8);
      default:
        return new THREE.BoxGeometry(0.2, 0.2, 0.2);
    }
  };

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.2;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2 + position.x) * 0.003;
      meshRef.current.position.x += Math.cos(state.clock.elapsedTime * 1.5 + position.z) * 0.002;
      meshRef.current.scale.setScalar(scale + Math.sin(state.clock.elapsedTime * 3 + position.y) * 0.1);
    }
  });

  const onPointerDown = (e: any) => {
    e.stopPropagation();
    // Rotate globe toward product position
    const direction = position.clone().normalize();
    rotationRef.current.set(
      Math.atan2(direction.y, Math.sqrt(direction.x * direction.x + direction.z * direction.z)),
      Math.atan2(direction.x, direction.z),
      0
    );
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      geometry={createGeometry(type)}
      material={material}
      onPointerDown={onPointerDown}
      onPointerOver={(e) => { document.body.style.cursor = 'pointer'; e.stopPropagation(); }}
      onPointerOut={() => { document.body.style.cursor = 'auto'; }}
    />
  );
}

function FloatingTools({ rotationRef }: { rotationRef: React.MutableRefObject<THREE.Euler> }) {
  const tools = useMemo(() => [
    { pos: new THREE.Vector3(-4, 2, -2), type: 'wrench', scale: 0.8 },
    { pos: new THREE.Vector3(3, -1, -3), type: 'hammer', scale: 0.6 },
    { pos: new THREE.Vector3(-2, -2, 2), type: 'drill', scale: 0.7 },
    { pos: new THREE.Vector3(4, 1, 1), type: 'gear', scale: 0.5 },
    { pos: new THREE.Vector3(-3, 0, 3), type: 'screwdriver', scale: 0.4 },
  ], []);

  const createToolGeometry = (type: string) => {
    switch (type) {
      case 'wrench':
        return new THREE.BoxGeometry(0.3, 0.1, 0.1);
      case 'hammer':
        return new THREE.CylinderGeometry(0.05, 0.1, 0.8, 8);
      case 'drill':
        return new THREE.CylinderGeometry(0.1, 0.15, 0.6, 8);
      case 'gear':
        return new THREE.CylinderGeometry(0.2, 0.2, 0.1, 16);
      case 'screwdriver':
        return new THREE.CylinderGeometry(0.02, 0.05, 0.4, 6);
      default:
        return new THREE.BoxGeometry(0.2, 0.2, 0.2);
    }
  };

  return (
    <group>
      {tools.map((tool, index) => (
        <FloatingTool
          key={index}
          position={tool.pos}
          geometry={createToolGeometry(tool.type)}
          scale={tool.scale}
          rotationRef={rotationRef}
        />
      ))}
    </group>
  );
}

function FloatingTool({ 
  position, 
  geometry, 
  scale, 
  rotationRef 
}: { 
  position: THREE.Vector3; 
  geometry: THREE.BufferGeometry; 
  scale: number;
  rotationRef: React.MutableRefObject<THREE.Euler>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const material = useMemo(() => 
    new THREE.MeshStandardMaterial({ 
      color: '#f0851e', 
      metalness: 0.8, 
      roughness: 0.2,
      emissive: '#D76714',
      emissiveIntensity: 0.3
    }), []
  );

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position.x) * 0.001;
    }
  });

  const onPointerDown = (e: any) => {
    e.stopPropagation();
    // Rotate globe toward tool position
    const direction = position.clone().normalize();
    rotationRef.current.set(
      Math.atan2(direction.y, Math.sqrt(direction.x * direction.x + direction.z * direction.z)),
      Math.atan2(direction.x, direction.z),
      0
    );
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      geometry={geometry}
      material={material}
      onPointerDown={onPointerDown}
      onPointerOver={(e) => { document.body.style.cursor = 'pointer'; e.stopPropagation(); }}
      onPointerOut={() => { document.body.style.cursor = 'auto'; }}
    />
  );
}

function IndustrialProductModel({ rotationRef }: { rotationRef: React.MutableRefObject<THREE.Euler> }) {
  const groupRef = useRef<THREE.Group>(null);
  const material = useMemo(() => 
    new THREE.MeshStandardMaterial({ 
      color: '#f0851e', 
      metalness: 0.8, 
      roughness: 0.2,
      emissive: '#D76714',
      emissiveIntensity: 0.2
    }), []
  );

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate the entire product assembly
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main gear */}
      <mesh position={[0, 0, 0]} geometry={new THREE.CylinderGeometry(1.2, 1.2, 0.2, 16)} material={material} />
      
      {/* Secondary gears */}
      <mesh position={[1.5, 0.3, 0]} rotation={[0, 0, Math.PI/4]} geometry={new THREE.CylinderGeometry(0.6, 0.6, 0.15, 12)} material={material} />
      <mesh position={[-1.5, -0.3, 0]} rotation={[0, 0, -Math.PI/4]} geometry={new THREE.CylinderGeometry(0.6, 0.6, 0.15, 12)} material={material} />
      
      {/* Tool attachments */}
      <mesh position={[0, 0.8, 0]} rotation={[Math.PI/2, 0, 0]} geometry={new THREE.CylinderGeometry(0.05, 0.1, 0.8, 8)} material={material} />
      <mesh position={[0, -0.8, 0]} rotation={[-Math.PI/2, 0, 0]} geometry={new THREE.CylinderGeometry(0.05, 0.1, 0.8, 8)} material={material} />
      
      {/* Bearing rings */}
      <mesh position={[0, 0, 0.15]} geometry={new THREE.TorusGeometry(1.3, 0.1, 8, 16)} material={material} />
      <mesh position={[0, 0, -0.15]} geometry={new THREE.TorusGeometry(1.3, 0.1, 8, 16)} material={material} />
    </group>
  );
}

function AboutUsIcon({ rotationRef }: { rotationRef: React.MutableRefObject<THREE.Euler> }) {
  const router = useRouter();
  const meshRef = useRef<THREE.Mesh>(null);
  const material = useMemo(() => 
    new THREE.MeshStandardMaterial({ 
      color: '#f0851e', 
      metalness: 0.9, 
      roughness: 0.1,
      emissive: '#D76714',
      emissiveIntensity: 0.8
    }), []
  );

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  const onClick = (e: any) => {
    e.stopPropagation();
    router.push('/about');
  };

  return (
    <mesh
      ref={meshRef}
      position={[3.5, 1.5, 2]}
      onClick={onClick}
      onPointerOver={(e) => { document.body.style.cursor = 'pointer'; e.stopPropagation(); }}
      onPointerOut={() => { document.body.style.cursor = 'auto'; }}
    >
      <octahedronGeometry args={[0.3, 0]} />
      <primitive object={material} />
    </mesh>
  );
}

export function GlobeScene() {
  const rotationRef = useRef(new THREE.Euler(0, 0, 0));
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 2]} onCreated={({ gl }) => { gl.setClearAlpha(0); }}>
      <color attach="background" args={[0.05, 0.05, 0.1]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.0} />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#f0851e" />
      <ProductModels rotationRef={rotationRef} />
      <group position={[0, 0, 0]}>
        <RotatingGlobe rotationRef={rotationRef} />
      </group>
      <InteractiveControls rotationRef={rotationRef} />
      <AboutUsIcon rotationRef={rotationRef} />
      <Hotspots />
    </Canvas>
  );
}

function InteractiveControls({ rotationRef }: { rotationRef: React.MutableRefObject<THREE.Euler> }) {
  const { camera, size } = useThree();
  const target = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 7));
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
  const clickVec = useRef(new THREE.Vector2());
  const isDragging = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);

  useFrame(() => {
    camera.position.lerp(target.current, 0.05);
    camera.lookAt(0, 0, 0);
  });

  const onPointerDown = (e: any) => {
    e.stopPropagation();
    isDragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    document.body.style.cursor = 'grabbing';
    clickVec.current.set((e.clientX / size.width) * 2 - 1, -(e.clientY / size.height) * 2 + 1);
    raycaster.setFromCamera(clickVec.current, camera);
    const point = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, point);
    if (point.length() > 0) {
      const dir = point.clone().normalize().multiplyScalar(7);
      target.current.copy(dir);
    }
  };
  
  const onPointerMove = (e: any) => {
    if (!isDragging.current || !last.current) return;
    e.stopPropagation();
    const dx = (e.clientX - last.current.x) / size.width;
    const dy = (e.clientY - last.current.y) / size.height;
    last.current = { x: e.clientX, y: e.clientY };
    
    // Apply rotation directly to the globe
    rotationRef.current.y -= dx * Math.PI * 2; // horizontal drag rotates around Y
    rotationRef.current.x -= dy * Math.PI * 2; // vertical drag rotates around X
    
    // Clamp X rotation to prevent over-rotation
    rotationRef.current.x = Math.max(-Math.PI/2, Math.min(Math.PI/2, rotationRef.current.x));
  };
  
  const onPointerUp = (e: any) => {
    e.stopPropagation();
    isDragging.current = false;
    last.current = null;
    document.body.style.cursor = 'auto';
  };

  return (
    // full-screen invisible mesh to capture clicks & drags
    <mesh 
      onPointerDown={onPointerDown} 
      onPointerMove={onPointerMove} 
      onPointerUp={onPointerUp} 
      onPointerOver={() => { if (!isDragging.current) document.body.style.cursor = 'grab'; }} 
      onPointerOut={() => { if (!isDragging.current) document.body.style.cursor = 'auto'; }} 
      position={[0, 0, 0]}
    >
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  );
}

function Hotspots() {
  const router = useRouter();
  const items = [
    { pos: new THREE.Vector3(-3.5, 1.5, 0), label: 'Home', href: '/' },
    { pos: new THREE.Vector3(-2.5, -1.2, 1.8), label: 'About', href: '/about' },
    { pos: new THREE.Vector3(2.8, 0.6, 1.2), label: 'Products', href: '/products' },
    { pos: new THREE.Vector3(3.2, -1.4, -0.8), label: 'Contact', href: '/contact' },
  ];

  return (
    <group>
      {items.map((h) => (
        <mesh
          key={h.href}
          position={h.pos}
          onClick={() => router.push(h.href)}
          onPointerOver={(e) => { document.body.style.cursor = 'pointer'; e.stopPropagation(); }}
          onPointerOut={() => { document.body.style.cursor = 'auto'; }}
        >
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color={'#f0851e'} emissive={'#D76714'} emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

export default GlobeScene;


