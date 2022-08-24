import * as THREE from 'three';
import { createRoot } from 'react-dom/client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { angleToRadians } from './utils/angle';

import Basement from './Basement';

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Canvas
			style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
			camera={{ position: [ -40, 15, -40 ], fov: 3 }}
		>
			<ambientLight intensity={0.5} />
			<spotLight intensity={0.3} position={[ 5, 20, 20 ]} />
			<Suspense fallback={null}>
				<Basement position={[ 0, -1, 0 ]} />
				<mesh position={[ 0, -1, 0 ]} rotation={[ -angleToRadians(90), 0, 0 ]} receiveShadow>
					<planeGeometry args={[ 100, 100 ]} />
					<meshStandardMaterial color={'#000000'} />
				</mesh>
			</Suspense>
			<OrbitControls />
			<color attach="background" args={[ '#000000' ]} />
		</Canvas>
	</React.StrictMode>
);
