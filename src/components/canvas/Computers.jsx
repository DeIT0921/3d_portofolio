import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={isMobile ? [200, -150, -10] : [-200, -500, 300]}
        angle={0.2}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={isMobile ? [-100, -150, -10] : [0, 50, 500]}
        angle={0.7}
        penumbra={1}
        intensity={isMobile ? [0] : [0.2]}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={isMobile ? [50, -90, -30] : [-170, 100, -600]}
        angle={0.7}
        penumbra={1}
        intensity={isMobile ? [0] : [1]}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[1000, -700, -700]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? [0] : [1]}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={isMobile ? [1] : [0.4]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 4 : 16}
        position={isMobile ? [0, -7, -1.5] : [58, -16, -1.5]}
        rotation={isMobile ? [0.4, 0.9, -0.31] : [0.16, -0.2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: isMobile ? [100, 40, 9] : [100, 40, 200], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={isMobile ? true : false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;