import * as THREE from 'three';
import { createRoot } from 'react-dom/client';
import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';

import Basement from './Basement';

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Canvas style={{ width: '100vw', height: '100vh' }}>
			<ambientLight intensity={0.5} />
			<spotLight intensity={0.3} position={[ 5, 20, 20 ]} />
			<Suspense fallback={null}>
				<Basement />
			</Suspense>
			<OrbitControls />
		</Canvas>
	</React.StrictMode>
);
