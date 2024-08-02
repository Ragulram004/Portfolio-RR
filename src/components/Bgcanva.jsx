import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [positions] = useState(() => {
    const pos = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 2.4; 
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2.4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2.4;
    }
    return pos;
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < 5000; i++) {
      positions[i * 3 + 1] = Math.sin(time + positions[i * 3]) * 0.5; // Y position follows a sine wave based on X position
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.0036}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};


const Bgcanva = () => {
  return (
    <div className='w-full h-auto mt-[5.3rem] absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Bgcanva;