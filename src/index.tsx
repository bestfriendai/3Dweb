import * as THREE from 'three';
import { createRoot } from 'react-dom/client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Basement from './Basement';

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Canvas style={{ width: '100%', height: 'calc(100vh - 16px)' }} camera={{ position: [ -40, 15, -40 ], fov: 3 }}>
			<ambientLight intensity={0.5} />
			<spotLight intensity={0.3} position={[ 5, 20, 20 ]} />
			<Suspense fallback={null}>
				<Basement position={[ 0, -1, 0 ]} />
			</Suspense>
			<OrbitControls />
		</Canvas>
	</React.StrictMode>
);
