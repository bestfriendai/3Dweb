import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';

import { OrbitControls, useHelper } from '@react-three/drei';
import { angleToRadians } from './utils/angle';
import { useControls } from 'leva';

import Basement from './Basement';
import { SpotLight, SpotLightHelper } from 'three';

function App() {
	return (
		<>
			<spotLight color={'#3588FF'} position={[ 0, 5, 0 ]} distance={10} intensity={10} angle={0.25} penumbra={1} />
			<Suspense fallback={null}>
				<Basement position={[ 0, -1, 0 ]} />
				<mesh position={[ 0, -1, 0 ]} rotation={[ -angleToRadians(90), 0, 0 ]} receiveShadow >
					<planeGeometry args={[ 100, 100 ]} />
					<meshStandardMaterial color={'#000000'} />
				</mesh>
				
			</Suspense>
			<OrbitControls maxPolarAngle={Math.PI / 2} maxDistance={100}/>
			<color attach="background" args={[ '#000000' ]} />
            </>
	);
}

export default App;
