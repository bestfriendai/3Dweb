import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';

import { OrbitControls, useHelper } from '@react-three/drei';
import { angleToRadians } from './utils/angle';
import { useControls } from 'leva';

import Basement from './Basement';
import { SpotLight, SpotLightHelper } from 'three';

function App() {

	const spotlightRef = useRef<SpotLight>(null!);
	useHelper(spotlightRef, SpotLightHelper, 'red');

	const { distance, intensity, angle } = useControls({ distance: { value: 5, min: 1, max: 10 }, intensity: {value: 1, min: 0, max: 5}, angle: {value: Math.PI / 6, min: 0.1, max: 1} });
	return (
		<>
			<spotLight color={'#3588FF'} ref={spotlightRef} position={[ 0, 5, 0 ]} distance={distance} intensity={intensity} angle={angle} />
			<Suspense fallback={null}>
				<Basement position={[ 0, -1, 0 ]} />
				<mesh position={[ 0, -1, 0 ]} rotation={[ -angleToRadians(90), 0, 0 ]} receiveShadow >
					<planeGeometry args={[ 100, 100 ]} />
					<meshStandardMaterial color={'#000000'} />
				</mesh>
			</Suspense>
			<OrbitControls maxPolarAngle={Math.PI / 2} />
			<color attach="background" args={[ '#000000' ]} />
            </>
	);
}

export default App;
